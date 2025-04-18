---
repo:
  owner: block
  name: ftl
title: ftl
description: FTL is a platform for building distributed systems that are safe to operate, easy to reason about, and fast to iterate and develop on.
branding: block
lifeCycleStatus: mature
ciChecks:
  - type: github-actions
    label: test
    value: ci.yaml
licenses:
  - type: github-license
contributing:
  - type: "code-of-conduct"
    value: "CODE_OF_CONDUCT.md"
  - type: "contribution-guidelines"
    value: "CONTRIBUTING.md"
  - type: "issues"
packages:
  - packageName: github.com/block/ftl
    language: go
    artifacts:
      - type: reference-docs
        value: https://pkg.go.dev/github.com/block/ftl
---
