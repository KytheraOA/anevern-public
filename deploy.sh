#!/bin/bash

# 0. Branch safety check
# Get the name of the current branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" != "main" ]; then
  echo "Warning: You are on the '$BRANCH' branch."
  read -p "Are you sure you want to deploy this to the LIVE site? (y/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
      exit 1
  fi
fi

# 1. Configuration - UPDATE THESE
USER="dh_2zthsz"
HOST="pdx1-shared-a3-02.dreamhost.com"
REMOTE_DIR="home/dh_2zthsz/anevern.com/"
ZIP_NAME="export.zip" # Update this if Mintlify names the zip something else
TEMP_DIR="temp_build"

# 2. Run the Mintlify build
echo "Building Mintlify site..."
mintlify export

# 3. Prepare the files
echo "Unzipping build..."
# Create a clean temp directory
rm -rf $TEMP_DIR
mkdir $TEMP_DIR
# Unzip the file into the temp directory
unzip -q $ZIP_NAME -d $TEMP_DIR

# 4. Upload to DreamHost
echo "Syncing to DreamHost..."
# rsync the contents of the temp folder to the server
rsync -avz -e ssh --delete $TEMP_DIR/ $USER@$HOST:$REMOTE_DIR

# 5. Cleanup
echo "Cleaning up local files..."
rm -rf $TEMP_DIR
# Optional: rm $ZIP_NAME (uncomment if you want to delete the zip after upload)

echo "Deployment complete!"