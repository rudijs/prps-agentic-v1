#!/bin/bash

# Interpolate file contents with template
# From: Intial idea
# To: prompt: For PRD generation from initial idea

if [ -z "$1" ]; then
    echo "Error: filename argument is required" >&2
    exit 1
fi
export FILE_NAME=$(basename "$1" | sed 's/\.[^.]*$//')
export FILE_EXT=$(basename "$1" | sed 's/^[^.]*//')

export ARGUMENTS=$(cat prds/${FILE_NAME}${FILE_EXT})
# echo "$ARGUMENTS"

# envsubst '$ARGUMENTS' < prps/templates/prp_planning.md > prps/planning_$FILE_NAME
envsubst '$ARGUMENTS $FILE_NAME $FILE_EXT' < prps/templates/new-feature-prd.tpl.md > prds/${FILE_NAME}-prd-prompt${FILE_EXT}
