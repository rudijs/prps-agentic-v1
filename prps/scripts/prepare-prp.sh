#!/bin/bash

# Interpolate file contents with template
# From: PRD
# To: prompt: PRP for the PRD

if [ -z "$1" ]; then
    echo "Error: filename argument is required" >&2
    exit 1
fi
export FILE_NAME=$(basename "$1" | sed 's/\.[^.]*$//')
export FILE_EXT=$(basename "$1" | sed 's/^[^.]*//')

# export ARGUMENTS=$(cat prds/${FILE_NAME}${FILE_EXT})
# echo "$ARGUMENTS"

# envsubst '$ARGUMENTS' < prps/templates/prp_planning.md > prps/planning_$FILE_NAME
envsubst '$FILE_NAME $FILE_EXT' < prps/templates/new-feature-prp.tpl.md > prps/${FILE_NAME}-prompt${FILE_EXT}
