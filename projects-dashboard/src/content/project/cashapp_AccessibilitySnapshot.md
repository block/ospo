---
repo:
  owner: "cashapp"
  name: "AccessibilitySnapshot"
  defaultBranch: "master"
title: "AccessibilitySnapshot"
description: "Easy regression testing for iOS accessibility"
branding: "cashapp"
lifeCycleStatus: "mature"
ciChecks:
  - type: "github-actions"
    label: "ci"
    value: "ci.yml"
licenses:
  - type: "github-license"
# securityScans: # TODO
# - type: "fossa-license"
# - type: "fossa-security"
# - type: "github-actions"
#   label: "scan"
#   value: "security.yml"
# - type: "github-actions"
#   label: "CodeQL"
#   value: "codeql.yml"
# scoreCards:
#   - type: "ossf"
tests:
  - type: "codecov"
contributing:
  # - type: "code-of-conduct"
  #   value: "CODE_OF_CONDUCT.md" # TODO
  - type: "contribution-guidelines"
    value: "CONTRIBUTING.md"
  - type: "issues"
  - type: "github-discussions"

packages:
  - packageName: "AccessibilitySnapshot"
    repoPath: "api"
    language: "swift"
    artifacts:
      - type: "cocoapods"
        value: "AccessibilitySnapshot"
---
