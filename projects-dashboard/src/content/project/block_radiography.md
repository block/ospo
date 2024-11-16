---
repo:
  owner: "block"
  name: "radiography"
title: "Radiography"
description: "Text-ray goggles for your Android UI"
branding: "block"
lifeCycleStatus: "mature"
ciChecks:
  - type: "github-actions"
    label: "android"
    value: "android.yml"
licenses:
  - type: "github-license"
# securityScans: #TODO
#   - type: "fossa-license"
#   - type: "fossa-security"
#   - type: "github-actions"
#     label: "scan"
#     value: "security.yml"
#   - type: "github-actions"
#     label: "CodeQL"
#     value: "codeql.yml"
# scoreCards:
#   - type: "ossf"
# tests: # TODO
#   - type: "codecov"
contributing:
  - type: "code-of-conduct"
    value: "CODE_OF_CONDUCT.md"
  - type: "contribution-guidelines"
    value: "CONTRIBUTING.md"
  - type: "issues"
  - type: "github-discussions"

packages:
  - packageName: "java-kotlin-maven-example-api"
    repoPath: "api"
    language: "kotlin"
    artifacts:
      - type: "maven"
        value: "com.squareup.radiography/radiography"
---
