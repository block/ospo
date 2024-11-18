import type { BadgeType, LifeCycleStatus } from "../content/config";

interface Repo {
  owner: string;
  name: string;
}

function getDefaultBadgeSource(
  type: string,
  label: string,
  value: string
): string {
  return `https://img.shields.io/${type}/${label}-${value}-purple?style=flat-square`;
}

function getGithubActionsBadge(
  repo: Repo,
  value = "ci.yml",
  label = "ci"
): [string, string] {
  const badgeSrc = `https://img.shields.io/github/actions/workflow/status/${repo.owner}/${repo.name}/${value}?style=flat-square&branch=main&logo=github&label=${label}&logoColor=FFFFFF`;
  const href = `https://github.com/${repo.owner}/${repo.name}/actions/workflows/${value}`;
  return [badgeSrc, href];
}

function getGithubLicenseBadge(repo: Repo): [string, string] {
  const badgeSrc = `https://img.shields.io/github/license/${repo.owner}/${repo.name}?style=flat-square&color=4c1&label=license`;
  const href = `https://github.com/${repo.owner}/${repo.name}/blob/main/LICENSE`;
  return [badgeSrc, href];
}

function getGithubTagBadge(repo: Repo, value?: string): [string, string] {
  let badgeSrc = `https://img.shields.io/github/v/release/${repo.owner}/${repo.name}?logo=github&label=tag&style=flat-square&color=4c1`;
  if (value) {
    badgeSrc += `&filter=${value}`;
  }
  const href = `https://github.com/${repo.owner}/${repo.name}/releases`;
  return [badgeSrc, href];
}

function getFossaBadge(repo: Repo, issueType: string): [string, string] {
  const badgeSrc = `https://app.fossa.com/api/projects/custom%2B588%2Fgithub.com%2F${repo.owner}%2F${repo.name}.svg?type=shield&issueType=${issueType}`;
  const href = `https://app.fossa.com/projects/custom%2B588%2Fgithub.com%2F${repo.owner}%2F${repo.name}?ref=badge_shield&issueType=${issueType}`;
  return [badgeSrc, href];
}

function getOssfBadge(repo: Repo): [string, string] {
  const badgeSrc = `https://img.shields.io/ossf-scorecard/github.com/${repo.owner}/${repo.name}?label=ossf&style=flat-square`;
  const href = `https://securityscorecards.dev/viewer/?uri=github.com/${repo.owner}/${repo.name}`;
  return [badgeSrc, href];
}

function getCodecovBadge(repo: Repo): [string, string] {
  const badgeSrc = `https://img.shields.io/codecov/c/gh/${repo.owner}/${repo.name}/main?label=codecov&style=flat-square&token=YI87CKF1LI`;
  const href = `https://codecov.io/github/${repo.owner}/${repo.name}`;
  return [badgeSrc, href];
}

function getTbdVectorsBadge(repo: Repo): [string, string] {
  const badgeSrc = `https://tbd54566975.github.io/sdk-report-runner/${repo.name}.svg`;
  const href = "https://tbd54566975.github.io/sdk-report-runner/";
  return [badgeSrc, href];
}

function getNpmBadge(value?: string): [string, string] {
  if (!value) {
    throw new Error("NPM package artifact value is required for badge");
  }
  const badgeSrc = `https://img.shields.io/npm/v/${value}.svg?style=flat-square&logo=npm&label=npm ${value}&logoColor=FFFFFF&color=4c1`;
  const href = `https://www.npmjs.com/package/${value}`;
  return [badgeSrc, href];
}

function getMavenBadge(value?: string): [string, string] {
  if (!value) {
    throw new Error("Maven package artifact value is required for badge");
  }
  const artifactName = value.split("/")[1];
  const badgeSrc = `https://img.shields.io/maven-central/v/${value}?color=b07219&label=mvn ${artifactName}&logo=apachemaven&style=flat-square`
  const href = `https://central.sonatype.com/artifact/${value}`;
  return [badgeSrc, href];
}

function getReferenceDocsBadge(value?: string): [string, string] {
  if (!value) {
    throw new Error("Reference docs URL is required for badge");
  }
  const badgeSrc = `https://img.shields.io/badge/API Reference Docs-purple?style=flat-square`;
  const href = value;
  return [badgeSrc, href];
}

function getCodeOfConductBadge(repo: Repo, value?: string): [string, string] {
  const badgeSrc = `https://img.shields.io/badge/Code of Conduct-blue?style=flat-square`;
  const href = `https://github.com/${repo.owner}/${repo.name}/blob/main/${value}`;
  return [badgeSrc, href];
}

function getContributionGuidelinesBadge(repo: Repo, value?: string): [string, string] {
  const badgeSrc = `https://img.shields.io/badge/Contribution Guidelines-orange?style=flat-square`;
  const href = `https://github.com/${repo.owner}/${repo.name}/blob/main/${value}`;
  return [badgeSrc, href];
}

function getDiscordBadge(value?: string): [string, string] {
  if (!value) {
    throw new Error("Discord URL is required for badge");
  }
  const badgeSrc = `https://img.shields.io/badge/Discord-purple?style=flat-square&logo=discord&logoColor=FFFFFF`;
  const href = value;
  return [badgeSrc, href];
}

function getMailingListBadge(value?: string): [string, string] {
  if (!value) {
    throw new Error("Mailing list URL is required for badge");
  }
  const badgeSrc = `https://img.shields.io/badge/Mailing List-pink?style=flat-square&logo=mailboxdotorg&logoColor=FFFFFF`;
  const href = value;
  return [badgeSrc, href];
}

function getLifeCycleStatusBadge(value?: string): [string, string] {
  const badgeLabel = "Life Cycle Status";
  const badgeValue = value ?? "empty";
  let badgeColor = "";
  switch (badgeValue) {
    case "proposal":
      badgeColor = "yellow";
      break;
    case "incubation":
      badgeColor = "blue";
      break;
    case "mature":
      badgeColor = "green";
      break;
    case "core":
      badgeColor = "purple";
      break;
    case "archived":
      badgeColor = "red";
      break;
    default:
      badgeColor = "lightgrey";
      break;
  }
  const badgeSrc = `https://img.shields.io/badge/${badgeLabel}-${badgeValue}-${badgeColor}?style=flat-square`;
  const href = "";
  return [badgeSrc, href];
}

function getGithubRepoBadge(repo: Repo): [string, string] {
  const badgeValue = `${repo.owner}/${repo.name.replaceAll("-", "--")}`;
  const badgeColor = "gray";
  const badgeSrc = `https://img.shields.io/badge/-${badgeValue}-${badgeColor}?style=flat-square&logo=github`;
  const href = `https://github.com/${repo.owner}/${repo.name}`;
  return [badgeSrc, href];
}

function getIssuesBadge(repo: Repo): [string, string] {
  const badgeSrc = `https://img.shields.io/github/issues/${repo.owner}/${repo.name}?style=flat-square`;
  const href = `https://github.com/${repo.owner}/${repo.name}/issues`;
  return [badgeSrc, href];
}

export function getBadgeInfo(
  repo: Repo,
  type: BadgeType,
  label?: string,
  value?: string
): [string, string] {
  switch (type) {
    case "github-actions":
      return getGithubActionsBadge(repo, value, label);
    case "github-license":
      return getGithubLicenseBadge(repo);
    case "github-tag":
      return getGithubTagBadge(repo, value);
    case "fossa-license":
      return getFossaBadge(repo, "license");
    case "fossa-security":
      return getFossaBadge(repo, "security");
    case "ossf":
      return getOssfBadge(repo);
    case "codecov":
      return getCodecovBadge(repo);
    case "tbd-vectors":
      return getTbdVectorsBadge(repo);
    case "npm":
      return getNpmBadge(value);
    case "maven":
      return getMavenBadge(value);
    case "reference-docs":
      return getReferenceDocsBadge(value);
    case "life-cycle-status":
      return getLifeCycleStatusBadge(value);
    case "github-repo":
      return getGithubRepoBadge(repo);
    case "code-of-conduct":
      return getCodeOfConductBadge(repo, value);
    case "contribution-guidelines":
      return getContributionGuidelinesBadge(repo, value);
    case "discord":
      return getDiscordBadge(value);
    case "mailing-list":
      return getMailingListBadge(value);
    case "issues":
      return getIssuesBadge(repo);
    default:
      return [
        getDefaultBadgeSource(type, label ?? "badge", value ?? "value"),
        "",
      ];
  }
}