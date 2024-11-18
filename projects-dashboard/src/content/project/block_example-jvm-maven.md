---
repo:
  owner: "block"
  name: "example-jvm-maven"
title: "JVM Maven Example"
description: "Example to bootstrap new JVM/Maven Projects"
branding: "block"
lifeCycleStatus: "incubation"
ciChecks:
  - type: "github-actions"
    label: "build"
    value: "build.yml"
licenses:
  - type: "github-license"
securityScans:
  - type: "fossa-license"
  - type: "fossa-security"
  - type: "github-actions"
    label: "scan"
    value: "security.yml"
  - type: "github-actions"
    label: "CodeQL"
    value: "codeql.yml"
scoreCards:
  - type: "ossf"
tests:
  - type: "codecov"
contributing:
  - type: "code-of-conduct"
    value: "CODE_OF_CONDUCT.md"
  - type: "contribution-guidelines"
    value: "CONTRIBUTING.md"
  - type: "issues"
  - type: "discord"
    value: "https://discord.gg/3fHnCA8C"
  - type: "mailing-list"
    value: "https://groups.google.com/g/tbd"

packages:
  - packageName: "example-jvm-maven-api"
    repoPath: "api"
    language: "java"
    artifacts:
      - type: "maven"
        value: "xyz.block/example-jvm-maven-api"
  - packageName: "example-jvm-maven-impl"
    repoPath: "impl"
    language: "java"
    artifacts:
      - type: "maven"
        value: "xyz.block/example-jvm-maven-impl"
  - packageName: "example-jvm-maven-parent"
    language: "java"
    artifacts:
      - type: "maven"
        value: "xyz.block/example-jvm-maven-parent"
---
