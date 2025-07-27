#!/bin/bash

if [ -z "$1" ]; then
    echo "Error: filename argument is required" >&2
    exit 1
fi

export FILE_NAME=$(basename "$1" | sed 's/\.[^.]*$//')

export FILE_EXT=$(basename "$1" | sed 's/^[^.]*//')

export ARGUMENTS=$(cat prds/${FILE_NAME}${FILE_EXT})

envsubst '$ARGUMENTS $FILE_NAME $FILE_EXT' < prps/templates/prp-planning-create.md > prds/${FILE_NAME}-planning-prompt${FILE_EXT}
