#!/bin/bash

ARG=$1
set -x verbose #echo on

if [ -z "$ARG" ]; then
  TARGET=$(basename $(pwd))
else
  TARGET=$ARG
fi

rsync \
  --delete-excluded \
  --exclude $(basename $0) \
  --exclude '.git*' \
  --exclude 'node_modules/' \
  -va . ~/Dropbox/Public/$TARGET

# Optional stuff

FILE_TO_LINK="index.html"
DROPBOX_ID=1103994 # Get a public link for something to get the ID
URL="https://dl.dropboxusercontent.com/u/$DROPBOX_ID/$TARGET/$FILE_TO_LINK"

# Copy public link to the clipboard
echo -n $URL | pbcopy

# Open the directory in Finder
open ~/Dropbox/Public/$TARGET
