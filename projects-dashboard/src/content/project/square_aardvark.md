---
repo:
  owner: "square"
  name: aardvark
  defaultBranch: "master"
title: Aardvark
description: Aardvark is a library that makes it dead simple to create actionable bug reports.
branding: square
lifeCycleStatus: "mature"
ciChecks:
  - type: "github-actions"
    label: build
    value: ci.yml
licenses:
  - type: "github-license"
contributing:
  - type: "contribution-guidelines"
    value: "Contributing.md"
  - type: "issues"
packages:
  - packageName: aardvark
    language: objective-c
    artifacts:
      - type: cocoapods
        value: Aardvark
---
