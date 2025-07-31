
# Project Knowledge

## Prime Context for AI Assistant

### **Strict Execution Protocol**
1. **Trigger**:
   Command: `execute @prime-core.md`
   Actions:
   - Read ALL files in this exact order (skip missing):
     1. `knowledge/*.md` (context first)
     2. `src/*.ts` (implementation)
     3. `test/*.test.ts` (validation)
   - Output ONLY final report (zero chat)

2. **Report Format**:
   ```markdown
   ### Key Findings
   - `knowledge/`: [PRP framework rules]
   - `src/`: [Core patterns]
   ```

3. **Failure Rules**:
   - Missing files: Skip silently
   - Errors: Log in report, no interruption

### **Workflow**
1. Confirm structure (`tree`)
2. Read files in order
3. Output report

### **No Exceptions**
- No confirmations
- No questions
- No deviations
