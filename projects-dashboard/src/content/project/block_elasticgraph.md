---
repo:
  owner: block
  name: elasticgraph
title: ElasticGraph
description: Schema-driven, scalable, cloud-native, batteries-included GraphQL with superpowers
branding: block
lifeCycleStatus: mature
ciChecks:
  - type: github-actions
    label: test
    value: ci.yml
licenses:
  - type: github-license
securityScans:
  - type: github-actions
    label: scan
    value: scorecards.yml
scoreCards:
  - type: ossf
contributing:
  - type: "code-of-conduct"
    value: "CODE_OF_CONDUCT.md"
  - type: "contribution-guidelines"
    value: "CONTRIBUTING.md"
  - type: "issues"
packages:
  - packageName: elasticgraph
    language: ruby
    artifacts:
      - type: rubygems
        value: elasticgraph
      - type: reference-docs
        value: https://block.github.io/elasticgraph/docs/main/
---
