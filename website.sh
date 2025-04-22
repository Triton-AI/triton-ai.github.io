#!/bin/bash

docker run -it \
  -p 3000:3000 \
  -v "$(pwd):/app" \
  -w /app \
  tai-website bash -c "
    apt-get update && \
    apt-get install -y vim nano neovim curl git && \
    npm install -g pnpm && \
    pnpm install && \
    bash"

