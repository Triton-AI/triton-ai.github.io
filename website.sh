#!/bin/bash

docker run \
  --name tai-website-dev\
  -it \
  --rm \
  -p 3000:3000 \
  -v "$(pwd):/app" \
  -w /app \
  tai-website bash -c "
    apt-get update && \
    apt-get install -y vim nano neovim curl git net-tools && \
    npm install -g pnpm && \
    pnpm install && \
    bash"

