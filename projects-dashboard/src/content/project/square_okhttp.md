---
repo:
  owner: "square"
  name: "okhttp"
  defaultBranch: "master"
title: "OkHttp"
description: "Square’s meticulous HTTP client for the JVM, Android, and GraalVM."
branding: "square"
lifeCycleStatus: "mature"
website: "https://square.github.io/okhttp/"
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
  # - type: "code-of-conduct"
  #   value: "CODE_OF_CONDUCT.md"
  - type: "contribution-guidelines"
    value: "CONTRIBUTING.md"
  - type: "issues"
  # - type: "discord"
  #   value: "https://discord.com/invite/block-opensource"
  # - type: "github-discussions"
  # - type: "mailing-list"
  #   value: "https://groups.google.com/g/tbd"

packages:
  - packageName: "okhttp"
    repoPath: "api"
    language: "java"
    artifacts:
      - type: "maven"
        value: "com.squareup.okhttp3/okhttp"
---
