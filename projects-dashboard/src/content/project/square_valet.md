---
repo:
  owner: "square"
  name: valet
  defaultBranch: main
title: Valet
description: Valet lets you securely store data in the iOS, tvOS, watchOS, or macOS Keychain without knowing a thing about how the Keychain works. It’s easy. We promise.
branding: square
lifeCycleStatus: mature
ciChecks:
  - type: github-actions
    label: ci
    value: ci.yml
licenses:
  - type: "github-license"
contributing:
  - type: "contribution-guidelines"
    value: "Contributing.md"
  - type: "issues"
packages:
  - packageName: valet
    language: swift
    artifacts:
      - type: spi
        value: square/Valet
      - type: cocoapods
        value: Valet
---
