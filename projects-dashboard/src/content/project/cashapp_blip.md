---
repo:
  owner: cashapp
  name: blip
title: blip
description: Sublime MySQL monitoring
branding: cashapp
lifeCycleStatus: mature
ciChecks:
  - type: github-actions
    label: test
    value: ci.yml
licenses:
  - type: github-license
securityScans:
  - type: github-actions
    label: CodeQL
    value: codeql-analysis.yml
contributing:
  - type: "contribution-guidelines"
    value: "CONTRIBUTING.md"
  - type: "issues"

packages:
  - packageName: github.com/cashapp/blip
    language: go
    artifacts:
      - type: reference-docs
        value: https://pkg.go.dev/github.com/cashapp/blip
---
