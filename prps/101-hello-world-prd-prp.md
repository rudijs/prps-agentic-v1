# Create BASE PRP for Hello World Script

## Feature: prds/101-hello-world-prd.md

This Product Requirement Prompt (PRP) aims to guide the implementation of the "Hello World" Bash script, as specified in `prds/101-hello-world-prd.md`. The goal is to create a simple, executable `hello.sh` script in the `src/` directory that prints "Hello, World!" to standard output. This script serves as a foundational component for environment verification and a basic example of script execution within the project.

The implementation should prioritize clarity, simplicity, and adherence to standard Bash scripting practices, ensuring the script is immediately runnable and verifiable.

## Implementation Blueprint

### Pseudocode Approach

```
1. Define the target file path: prps-agentic-v1/src/hello.sh
2. Create the file if it doesn't exist.
3. Add the shebang line `#!/bin/bash` as the first line to specify the interpreter.
4. Add the `echo "Hello, World!"` command to print the desired string.
5. Set executable permissions on the file using `chmod +x`.
6. Verify the script's functionality by executing it and checking its output.
```

### Reference Files

The primary file to be created and modified is:
*   `prps-agentic-v1/src/hello.sh`

### Error Handling Strategy

For this basic script, error handling primarily involves ensuring the script is executable and Bash is available on the system. If the script lacks executable permissions or the Bash interpreter is not found, the system will report standard shell errors (e.g., "Permission denied", "command not found"). The validation gates will explicitly check for these conditions.

### Tasks to be Completed

1.  **TASK: Create `hello.sh` file.**
    *   Create an empty file at `prps-agentic-v1/src/hello.sh`.
2.  **TASK: Add script content.**
    *   Insert the following lines into `prps-agentic-v1/src/hello.sh`:
        ```prps-agentic-v1/src/hello.sh#L1-2
        #!/bin/bash
        echo "Hello, World!"
        ```
3.  **TASK: Set executable permissions.**
    *   Apply executable permissions to `prps-agentic-v1/src/hello.sh` using `chmod +x`.
4.  **TASK: Validate script execution and output.**
    *   Run the script from the project root.
    *   Confirm that the output is exactly "Hello, World!".

## Validation Gates (Executable by the AI agent)

```bash
# Validate file existence
test -f prps-agentic-v1/src/hello.sh || { echo "ERROR: src/hello.sh does not exist."; exit 1; }

# Validate shebang (first line)
head -n 1 prps-agentic-v1/src/hello.sh | grep -q '#!/bin/bash' || { echo "ERROR: src/hello.sh is missing shebang or incorrect."; exit 1; }

# Validate content (echo command)
grep -q 'echo "Hello, World!"' prps-agentic-v1/src/hello.sh || { echo "ERROR: src/hello.sh does not contain the correct echo command."; exit 1; }

# Validate executable permissions
test -x prps-agentic-v1/src/hello.sh || { echo "ERROR: src/hello.sh is not executable."; exit 1; }

# Execute script and validate output
OUTPUT=$(prps-agentic-v1/src/hello.sh)
if [ "$OUTPUT" != "Hello, World!" ]; then
    echo "ERROR: Script output is incorrect. Expected 'Hello, World!', got '$OUTPUT'."; exit 1;
else
    echo "SUCCESS: src/hello.sh executed successfully and produced correct output.";
fi
```

---

## Confidence Score (1-10)

10