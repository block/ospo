---
repo:
  owner: "square"
  name: "workflow-kotlin"
  defaultBranch: "main"
title: "Workflow Kotlin"
description: "A Kotlin library for making composable state machines, and UIs driven by those state machines."
branding: "square"
lifeCycleStatus: "mature"
website: "https://square.github.io/workflow/"
ciChecks:
  - type: "github-actions"
    label: "build"
    value: "kotlin.yml"
licenses:
  - type: "github-license"
contributing:
  - type: "code-of-conduct"
    value: "CODE_OF_CONDUCT.md"
  - type: "contribution-guidelines"
    value: "CONTRIBUTING.md"
  - type: "issues"
  - type: "slack"
    label: "#squarelibraries"
    value: "https://kotlinlang.slack.com/messages/C5HT9AL7Q"

packages:
  - packageName: "workflow-core"
    repoPath: "workflow-core"
    language: "kotlin"
    artifacts:
      - type: "maven"
        value: "com.squareup.workflow1/workflow-core-jvm"
      - type: "reference-docs"
        value: "https://square.github.io/workflow/kotlin/api/htmlMultiModule/workflow-core"
  - packageName: "workflow-rx2"
    repoPath: "workflow-rx2"
    language: "kotlin"
    artifacts:
      - type: "maven"
        value: "com.squareup.workflow1/workflow-rx2"
      - type: "reference-docs"
        value: "https://square.github.io/workflow/workflow-rx2/"
  - packageName: "workflow-testing-jvm"
    repoPath: "workflow-testing"
    language: "kotlin"
    artifacts:
      - type: "maven"
        value: "com.squareup.workflow1/workflow-testing-jvm"
      - type: "reference-docs"
        value: "https://square.github.io/workflow/kotlin/api/htmlMultiModule/workflow-testing"
  - packageName: "workflow-ui-core-android"
    repoPath: "workflow-ui/core-android"
    language: "kotlin"
    artifacts:
      - type: "maven"
        value: "com.squareup.workflow1/workflow-ui-core-android"
      - type: "reference-docs"
        value: "https://square.github.io/workflow/kotlin/api/htmlMultiModule/workflow-ui/core-android"
---
