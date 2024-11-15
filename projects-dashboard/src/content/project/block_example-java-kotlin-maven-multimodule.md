---
repo:
  owner: "block"
  name: "example-java-kotlin-maven-multimodule"
title: "Maven Multimodule Example"
description: "Example to bootstrap new Java Kotlin Maven Projects"
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
  - packageName: "java-kotlin-maven-example-api"
    repoPath: "api"
    language: "java"
    artifacts:
      - type: "maven"
        value: "xyz.block/java-kotlin-maven-example-api"
  - packageName: "java-kotlin-maven-example-impl"
    repoPath: "impl"
    language: "java"
    artifacts:
      - type: "maven"
        value: "xyz.block/java-kotlin-maven-example-impl"
  - packageName: "java-kotlin-maven-example-parent"
    language: "java"
    artifacts:
      - type: "maven"
        value: "xyz.block/java-kotlin-maven-example-parent"
---
