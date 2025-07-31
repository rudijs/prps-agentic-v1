## AI Assistant
You are a highly skilled software engineer with extensive knowledge in many programming languages, frameworks, design patterns, and best practices.

### 🔄 Project Awareness & Context
- This project uses the PRP framework.
- This application is a TypeScript project with some bash scripts.
- Application code is in the `src` directory.
- Tests are in the `src/test` directory.
- CLI application code is in the `src/cli` directory.

### The PRP Framework (Product Requirement Prompt)
- PRP = PRD (Product Requirement Document) + Curated Codebase Intelligence + Agent Runbook
- It's the minimum viable packet an AI needs to plausibly ship production-ready code in the first pass.

**Important** Read this PRP Framework documentation: `knowledge/prp-framework.md`

### 🧱 Code Structure & Modularity
- Favor the dependency injection pattern:
  1. Loose Coupling: Components and services do not create their own dependencies, making code more modular.
  2. Testability: Easy to swap out real dependencies with mock ones during unit testing.
  3. Reusability: Services can be reused across different parts of the app.
  4. Easier to maintain.
- Use functions rather than classes for modularity and testability.
- camelCase for variable names and function parameters.
- Hyphenated names for files and directories.
- **Never create a file longer than 500 lines of code.** If a file approaches this limit, refactor by splitting it into modules or helper files.
- **Organize code into clearly separated modules**, grouped by feature or responsibility.
- **Use the dotenv npm package** for environment variables.

### 🧪 Testing & Reliability
- **Always create vitest tests for new features** (functions, classes, routes, etc).
- **After updating any logic**, check whether existing unit tests need to be updated. If so, do it.
- **Tests should live in the `test` folder** mirroring the main app structure.
  - Include at least:
    - 1 test for expected use
    - 1 edge case
    - 1 failure case
- Test fixture JSON data is in `test/fixtures/`

### 📎 Style & Conventions
- **Typescript** as the primary language.
- **Use** `npm run lint` for code linting.
- **Use** `npx tsc --noEmit` for code compilation validation.

### 📚 Documentation & Explainability
- Model generated and maintained documentation is in the `docs` folder.
- **Update `docs/project-overview.md`** when new features are added, dependencies change, or setup steps are modified.
- **Comment non-obvious code** and ensure everything is understandable to a mid-level developer.
- When writing complex logic, **add an inline `// Reason:` comment** explaining the why, not just the what.

### 🧠 AI Behavior Rules
- **Never assume missing context. Ask questions if uncertain.**
- **Never hallucinate libraries or functions** – only use known, verified npm packages.
- **Always confirm file paths and module names** exist before referencing them in code or tests.
- **Never delete or overwrite existing code** unless explicitly instructed to or if part of a task, feature, or bug fix.

### Documentation & References (list all context needed to implement the feature)
```yaml
# MUST READ - Include these in your context window
- url: https://12factor.net/
  why: Follow the 12-factor app methodology for cloud-native development
- url: https://www.npmjs.com/package/commander
  why: Use Commander.js this for the command-line interface
- url: https://github.com/nktkas/hyperliquid
  why: Use nktkas hyperliquid for hyperliquid API
```

## Final validation Checklist
- [ ] All tests pass: `npm test`
- [ ] No linting errors: `npm run lint`
- [ ] No type errors: `npx tsc --noEmit`
- [ ] Error cases handled gracefully
- [ ] Logs are informative but not verbose
- [ ] Documentation updated if needed

---

## Anti-Patterns to Avoid
- ❌ Don't create new patterns when existing ones work
- ❌ Don't skip validation because "it should work"
- ❌ Don't ignore failing tests - fix them
- ❌ Don't use sync functions in async context
- ❌ Don't hardcode values that should be config
- ❌ Don't catch all exceptions - be specific
