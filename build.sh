#!/bin/bash
 
# Build the Docker image
docker build -t nrc-design-system .

# Create the lib directory if it doesn't exist
mkdir -p lib

# Run the Docker image and execute the build script
docker run --rm -v $(pwd)/lib:/usr/src/app/lib nrc-design-system yarn build
