FROM node:18
WORKDIR /app

RUN npm install -g pnpm
EXPOSE 3000

