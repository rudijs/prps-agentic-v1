# Project Structure Documentation

## Complete Project Tree
```
.
├── knowledge/
│   ├── global.md                 # Core PRP concept documentation
│    └── project-structure.md      # This file
├── prds/
│   ├── 101-hello-world.md        # Initial feature specification
│   ├── 101-hello-world-prd.md    # Generated product requirements
│   └── 101-hello-world-prd-prompt.md # PRD generation prompt
├── prompts/
│    └── build-structure.md        # Structure analysis prompt w/validation
├── prps/
│   ├── 101-hello-world-prd-prompt.md # PRP generation prompt
│   ├── 101-hello-world-prd-prp.md    # Final executable PRP
│   ├── scripts/
│   │   ├── prepare-prd.sh        # PRD prompt generator
│   │   └── prepare-prp.sh        # PRP generator
│    └── templates/
│       ├── new-feature.tpl.md    # Feature spec template
│       ├── new-feature-prd.tpl.md # PRD prompt template
│       └── new-feature-prp.tpl.md # PRP template
├── README.md                     # Project overview
└── src/
    └── hello.sh                  # Example implementation
```

## File Purposes

### Core Documentation
- `global.md`: Defines PRP methodology including:
  - Context requirements
  - Implementation strategies
  - Validation gate standards
- `project-structure.md`: This comprehensive structure reference

### Workflow Files
1. **Specification Phase**:
   - `prds/*.md`: Feature specifications → PRDs
   - `templates/new-feature.tpl.md`: Standard starting point

2. **Prompt Generation**:
   - Scripts transform specs → prompts
   - `prepare-prd.sh`: Creates PRD prompts
   - `prepare-prp.sh`: Creates executable PRPs

3. **Templates**:
   - Follow `spec→PRD→PRP` pipeline pattern
   - Contain parameterized placeholders

### Validation System
- `prompts/build-structure.md`:
  - Recursive analysis framework
  - Automated validation gates
  - Self-assessment checklist

## Validation Report

✅ **Structural Integrity**
- All expected directories present
- No orphaned files detected
- Template/script parity verified

⚠️ **Documentation Gaps**
- Scripts need usage examples
- Could benefit from test cases
- Consider adding CONTRIBUTING.md

## Maintenance Notes
- Last validated: 2023-11-15
- Recommended review frequency: Monthly
- Validation command: `tree -a -L 4 --gitignore`
