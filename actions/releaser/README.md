# Block OSPO Releaser

Quick and easy GitHub Action to automate secure releases with versioning and changelog generation.

## Usage

**1. Simply add the following release workflow to your repo:**

```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    branches:
      - main
  workflow_dispatch: # for manual publishing retries
    inputs:
      retry-publish:
        description: "Retry publishing"
        type: boolean
        required: false
        default: false

permissions:
  contents: write
  pull-requests: write
  id-token: write
  issues: write

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: block/ospo/actions/releaser@main
        with:
          block-releaser-app-id: ${{ secrets.BLOCK_RELEASER_APP_ID }}
          block-releaser-private-key: ${{ secrets.BLOCK_RELEASER_APP_PRIVATE_KEY }}
          release-type: node
          node-version: 20
          npm-token: ${{ secrets.NPM_TOKEN }}
          package-manager: yarn
          prepare-cmds: |
            yarn install --frozen-lockfile
```

**2. Allow Workflows to Create Pull Requests**

Go to the repo settings > Actions > General > Workflow permissions > and check `Allow GitHub Actions to create and approve pull requests`.

Then, start merging PRs (with titles respecting [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)) and Releaser will take care of the rest.

### How does it work?

Releaser will be watching for relevant commit pushes to the repo default branch. Then it will automatically generate changelog updates and bump the target version respecting SemVer in a temporary Release PR.

This Release PR will be accumulating and grouping the next merged PRs until you are ready to publish, by simply merging it.

Once the Release PR is merged it will publish the release to the GitHub Releases page and will publish the package to the corresponding registry (npm, rubygems, maven, etc).

### Why a release PR vs a direct on-demand publishing workflow?

A release PR allows maintainers to review the changes, generate and test the release candidate, and ensure the release is ready to be published.

It includes **reviewing the exact version** that will be published and **preview the generated changelogs**.

Historically, maintainers also like to implement release approval workflows. That's exactly what you get out-of-the-box when adopting Release PRs.

Also, it's a best practice to avoid bypassing branch protection rules when bumping version number on files and auto-generated changelogs during the CI release process.

### Why Conventional Commits?

When working in the open we need to follow conventions to make sure consumers are well informed about changes and that we are not breaking their services. [Semantic Versioning](https://semver.org/) and Changelogs are the well established industry standard way to do so.

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) allow us to automate SemVer bumps and Changelogs generation.

## Support

### Installing on existing repos with prior releases

Releaser works with GitHub releases. The only thing you need is to tag your last release with the last semver tag before installing the action above:

```sh
git tag -a v1.2.3 -m "v1.2.3"
git push origin v1.2.3
```

Then, start merging PRs respecting Conventional Commits in its title and Releaser will take care of the rest:

```sh
merged PR title: "fix: squash bug"
# -> Opens a Release PR with patch bump: v1.2.4

merged PR title: "feat: add new feature"
# -> Opens a Release PR with minor bump: v1.3.0

merged PR title: "feat!: super new improved flow"
# -> Opens a Release PR with major bump: v2.0.0
```

_Note: It also works with direct commits pushed to the default branch, but you should not be doing that._

### Troubleshooting

If you are facing any issues, please ping us in our Discord [#ospo](https://discord.com/channels/1287729918100246654/1339722383468007465) channel. You can tag us by using @ospo on your message!

#### 1. My publish failed, what do I do?

If for some reason the registry publishing step fails even though the release was created, you can manually trigger the publish step by re-running the workflow with the `retry-publish` input set to `true`.

#### 2. I need to adjust or improve the message of a previous PR

You can follow the steps below to fix it:

1. Edit the body of the already merged PR inserting the following block:

```
BEGIN_COMMIT_OVERRIDE
fix(utils): include forgotten XYZ change

Detailed description of the changes.
END_COMMIT_OVERRIDE
```

2. Run the Release workflow manually (no need to check the `retry-publish` input).

_We highly discourage against rewriting the commit because it breaks the git history, and could also break other tools watching the repo, aside from auditing._

#### 3. My merged PR is not being picked up in the Release PR

It happens if the PR merged does not follow the conventional commit message format.

You can follow the same steps of the above issue #2. Just edit the body of the already merged PR and re-run the Release workflow.

To prevent it from happening, you have a few options:

**1. Add a new workflow with the block releaser linter action**

```yaml
name: "Release Linter PR"

on:
  pull_request_target:
    types:
      - opened
      - edited
      - reopened

jobs:
  main:
    name: Validate PR title
    runs-on: ubuntu-latest
    permissions:
      pull-requests: read
    steps:
      - uses: block/ospo/actions/releaser-linter@main
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

This will fail the PR if the title does not follow the conventional commit message format.

This is not guaranteed to work because the merger can still edit the message before merging. (In which case just follow the steps of issue #2, if a mistaken is made).

You should check the GitHub config of the repo to ensure it's always picking the PR title automatically upon clicking the merge button.

**To do that, go to:** github.com/(block-org)/(repo)/settings > scroll down to Pull Requests > Default commit message > and set it to `PR title`.

**2. Add Pre-Commit Hooks or IDE Plugins**

You can add commit linters using hooks locally to fail fast, although **the CI check above is recommended as the authoritative guard‑rail**. Check below a few popular examples:

- **Git Hooks:**
  - [Husky + commitlint](https://commitlint.js.org/guides/local-setup)
  - [commitizen auto check](https://commitizen-tools.github.io/commitizen/tutorials/auto_check/)
- **IDE Plugins:**
  - [VSCode Conventional Commits extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)
  - [IntelliJ IDEA Conventional Commit plugin](https://plugins.jetbrains.com/plugin/13389-conventional-commit)
- You can find more here: [Tooling for Conventional Commits](https://www.conventionalcommits.org/en/about/#tooling-for-conventional-commits)

### Supported Release Registries

- npm
- ruby gems (coming soon)

The action is a thin wrapper around the amazing [release-please](https://github.com/googleapis/release-please) tool. Feel free to dig into their docs if you need more advanced controls and customization in your release. Also, we welcome PRs!
