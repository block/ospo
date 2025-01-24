---
repo:
  owner: "cashapp"
  name: "burst"
  defaultBranch: "main"
title: "Burst"
description: "Parameterized unit tests for Kotlin Multiplatform"
branding: "cashapp"
lifeCycleStatus: "mature"
ciChecks:
  - type: "github-actions"
    label: "build"
    value: "build.yaml"
licenses:
  - type: "github-license"
contributing:
  - type: "issues"

packages:
  - packageName: "burst"
    repoPath: "api"
    language: "kotlin"
    artifacts:
      - type: "maven"
        value: "app.cash.burst/burst"
      - type: "reference-docs"
        value: "https://cashapp.github.io/burst/docs/2.x/burst/app.cash.burst/index.html"
---
