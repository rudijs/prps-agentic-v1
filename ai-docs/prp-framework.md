# The PRP Framework (Product Requirement Prompt)

A PRP combines a **Product Requirements Document (PRD)** with **curated codebase intelligence** and an **agent runbook**. It provides the minimal context an AI needs to ship production-ready code in one pass, whether for a single task or chained workflows.

## What is a PRP?

A **Product Requirement Prompt (PRP)** is a structured prompt that gives an AI coding agent everything needed to deliver working software - no more, no less.

### Key Differences from PRD
| PRD | PRP |
|-----|-----|
| Defines "what" and "why" | Adds "how" (implementation) |
| Avoids technical details | Includes code snippets, paths |
| No validation checks | Enforces tests and linting |

## Core Components

### 1. Context
- Precise file paths and code snippets
- Library versions and documentation
- Uses `ai-docs/` directory for references

### 2. Implementation
- Clear technical specifications
- Required patterns and dependencies
- Architecture and type hints

### 3. Validation
- Automated checks (`tsc`, `npm test`)
- Individual function testing
- Shift-left quality gates

## Why Context Matters
- **Reduces hallucinations**: Less AI guesswork
- **Improves efficiency**: Better token usage
- **Ensures consistency**: Reliable outputs

## The `ai-docs/` Directory
Purpose:
- Store library documentation
- Maintain codebase guides
- Keep PRP templates

## Benefits
- Controlled outputs
- Higher relevance
- Predictable results
- Faster iteration cycles

> A PRP is a **context-aware blueprint** - not just a prompt. Clear specifications lead to working code on first pass.