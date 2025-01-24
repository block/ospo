---
repo:
  owner: "square"
  name: "okio"
  defaultBranch: "master"
title: "okio"
description: "A modern I/O library for Android, Java, and Kotlin Multiplatform."
branding: "square"
lifeCycleStatus: "mature"
website: "https://square.github.io/okio/"
ciChecks:
  - type: "github-actions"
    label: "build"
    value: "build.yml"
# licenses:
#   - type: "github-license"
# securityScans:
#   - type: "fossa-license"
#   - type: "fossa-security"
#   - type: "github-actions"
#     label: "scan"
#     value: "security.yml"
#   - type: "github-actions"
#     label: "CodeQL"
#     value: "codeql.yml"
# scoreCards:
#   - type: "ossf" # TODO
tests:
  - type: "codecov"
contributing:
  - type: "code-of-conduct"
    value: "docs/code_of_conduct.md"
  - type: "contribution-guidelines"
    value: "CONTRIBUTING.md"
  - type: "issues"
  # - type: "discord"
  #   value: "https://discord.com/invite/block-opensource"
  # - type: "github-discussions"
  # - type: "mailing-list"
  #   value: "https://groups.google.com/g/tbd"

packages:
  - packageName: "okio"
    repoPath: "api"
    language: "java"
    artifacts:
      - type: "maven"
        value: "com.squareup.okio/okio"
      - type: "reference-docs"
        value: "https://square.github.io/okio/3.x/okio/okio/okio/"
---
