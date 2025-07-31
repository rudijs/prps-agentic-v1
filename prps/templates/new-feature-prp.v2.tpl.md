# Create BASE PRP (v2)

## Execution Rules
```yaml
autonomous: true
fallbacks:
  timezone: UTC
  user_type: "developer"
  logging_level: "warn"
```

## Feature: prds/${FILE_SLUG}${FILE_EXT}

### Critical Context Requirements
- **Must Include**:
  - Codebase examples (3+ files)
  - External docs (2+ authoritative URLs)
  - Error handling patterns
  - Performance benchmarks

### Priority Implementation Tasks
1. [HIGH] Scaffold core module (`src/modules/${FEATURE_SLUG}`)
2. [HIGH] Implement primary service
3. [MED] Add validation tests
4. [LOW] Documentation

### Context Management
```yaml
priority_files:
  - src/utils/date.ts  # Time handling
  - src/config.ts      # Default configurations
  - test/_pattern.ts   # Testing conventions
```

### Validation Gates
```bash
# Core Validation
npm run lint
npm test

# AI-Assisted
npx aicodemod verify --feature ${FEATURE_SLUG} --min-score 85

# Performance
node benchmarks/${FEATURE_SLUG}.js
```

### Research Directives
1. **Codebase Analysis**:
   - Find 3 similar features
   - Document pattern matches

2. **External Research**:
   - Library docs (official sources only)
   - GitHub implementation examples
   - StackOverflow edge cases

### Quality Checklist
- [ ] All tasks prioritized
- [ ] Context files verified
- [ ] Validation gates executable
- [ ] Score ≥85 on aicodemod
- [ ] Fallbacks defined

# Template Variables Key
- `${FILE_SLUG}`: kebab-case-feature-name
- `${FILE_EXT}`: File extension (e.g., .md)
- `${FEATURE_SLUG}`: Feature directory name