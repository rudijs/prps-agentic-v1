# prps-agentic-v1
Product Requirement Prompt Framework for AI Assisted Coding

## Overview

Transform rough ideas into comprehensive PRDs with rich visual documentation.

Generate a complete PRP for feature implementation with deep and thorough research.

## AI Assistant

**Important** For Context and Knowledge read the .md files in the `knowledge/` directory.

## Developer PRP Workflow

1. Write an initial feature document, based from a template
    - `cp prps/templates/new-feature.tpl.md prds/101-hello-world.md`
    - Edit as required prds/101-hello-world.md
2. Create the prompt to create the PRD
    - Interpolate the initial feature with a template
    - `bash prps/scripts/prepare-prd.sh prds/101-hello-world.md`
    - Output: prds/101-hello-world-prd-prompt.md
3. Load the prompt into context in the IDE Agent Panel and execute it
    - Ex: `process @prds/101-hello-world-prd-prompt.md`
    - Output: prds/101-hello-world-prd.md
4. Create the prompt to create the PRP for the new PRD, based from a template
    - Interpolate the PRD into a new PRP, based on a template
    - `bash prps/scripts/prepare-prp.sh prds/101-hello-world-prd.md`
    - Output: prps/101-hello-world-prd-prompt.md
5. Load the prompt into context in the IDE Agent Panel and execute it
    - Output: prds/101-hello-world-prp.md
6. Run the PRP
    - Load into the Agent panel prps/101-hello-world-prd-prp.md and execute it.
