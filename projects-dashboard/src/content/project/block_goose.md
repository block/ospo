---
repo:
  owner: "block"
  name: "goose"
title: "Goose"
description: "Goose is a developer agent that operates from your command line to help you do the boring stuff."
branding: "block"
lifeCycleStatus: "incubation"
website: "https://block.github.io/goose/"
ciChecks:
  - type: "github-actions"
    label: "ci"
    value: "ci.yaml"
licenses:
  - type: "github-license"
securityScans:
  - type: "github-actions"
    label: "license-check"
    value: "license-check.yml"
  # TODO: add security scans (eg FOSSA)
# scoreCards: # todo
# tests: # todo add codecov
contributing:
  # - type: "code-of-conduct"
  #   value: "CODE_OF_CONDUCT.md" # TODO
  - type: "contribution-guidelines"
    value: "CONTRIBUTING.md"
  - type: "issues"
  - type: "discord"
    value: "https://discord.com/channels/1287729918100246654/1287729920319033345"
  - type: "github-discussions"

packages:
  - packageName: "goose-ai"
    repoPath: "src/goose"
    language: "python"
    artifacts:
      - type: "pypi"
        value: "goose-ai"
---
