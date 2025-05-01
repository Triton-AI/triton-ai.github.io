# Triton-AI GitHub Pages

## Instructions
1. Clone this repository, build the docker image, and execute `website.sh` to start a **docker dev-container**.
    ```bash
    git clone https://github.com/Triton-AI/triton-ai.github.io.git
    docker build -t tai-website .
    source website.sh
    ```
2. After running the script, in the container, run either command:
    - To start local development and go to https://localhost:3000/
        ```bash
        pnpm dev
        ```

    - Only run below if you wanna push changes **LIVE**.
        ```bash
        git config --global user.email "you@example.com"
        git config --global user.name "Your Name"
        GIT_USER=<name> npm run deploy
        ```
        This pushes to github pages so it becomes live on https://triton-ai.github.io/
