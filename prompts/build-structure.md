# Enhanced Prompt Build Structure with Validation Gates

## Initial Setup
1. Add each `.md` file from the `knowledge/` directory to the context.
2. **Validation Gate**: Confirm all knowledge files are loaded by listing them with checksums.

## Structure Analysis
3. Get the project structure using:
   ```bash
   tree -L 4 --gitignore
   ```
4. Create/overwrite `knowledge/project-structure.md` with the output.
5. **Validation Gate**:
   - Verify the structure file exists and contains valid tree output.
   - If invalid, retry with `tree -L 3` and document why deeper level was needed.

## File Analysis Phase
6. For each file in the structure:
   - Read the file.
   - Write a one-line summary in braces (e.g., `initial-setup.md [Initializes the project structure]`).
   - **Validation Sub-Gate**:
     - Confirm the summary accurately reflects file contents.
     - Flag any files that cannot be summarized in one line as needing review.

## Final Validation
7. After all files are processed:
   - Generate a consistency report showing:
     - Files that couldn't be summarized.
     - Potential conflicts between file purposes.
     - Missing documentation.
   - **Final Gate**: Require explicit approval before saving changes.

## Error Handling
8. If any validation fails:
   - Document the failure reason.
   - Suggest remediation steps.
   - Pause execution until manual review or adjusted parameters are provided.

## Self-Assessment Checklist
9. Before completion, ensure:
   - All validation gates passed.
   - All summaries are accurate and concise.
   - No critical files were skipped or misrepresented.
   - The consistency report is clean and actionable.

## Output
10. Save the final validated structure and summaries to `knowledge/project-structure.md`.
