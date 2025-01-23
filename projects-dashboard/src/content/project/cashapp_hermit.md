---
repo:
  owner: cashapp
  name: hermit
title: hermit
description: Hermit manages isolated, self-bootstrapping sets of tools in software projects.
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
        value: https://cashapp.github.io/hermit/
---
