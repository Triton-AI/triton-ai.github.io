// Copyright (c) Mysten Labs, Inc.
// Modifications Copyright (c) 2024 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

import { themes } from "prism-react-renderer";
import path from "path";
import math from "remark-math";
import katex from "rehype-katex";
import codeImport from "remark-code-import";

require("dotenv").config();


/** @type {import('@docusaurus/types').Config} */
const config = {
  organizationName: 'triton-ai',
  projectName: 'triton-ai.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  title: "TritonAI",
  tagline:
    "Triton AI Website",
  favicon: "/icons/tai_website_icon.jpg",

  // Set the production url of your site here
  url: "https://triton-ai.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // TODO: Revert the changes when the docs are ready
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  onBrokenAnchors: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  /*  i18n: {
    defaultLocale: "en",
    locales: [
      "en",
      "el",
      "fr",
      "ko",
      "tr",
      "vi",
      "zh-CN",
      "zh-TW",
    ],
  },*/
  markdown: {
    format: "detect",
    mermaid: true,
  },
  plugins: [
    // ....
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          const redirects = [
            {
              from: '/references/ts-sdk',
              to: '/ts-sdk',
            },
          ];
          let paths = [];
          for (const redirect of redirects) {
            if (existingPath.startsWith(redirect.to)) {
              paths.push(existingPath.replace(redirect.to, redirect.from));
            }
          }
          return paths.length > 0 ? paths : undefined;
        },
      },
    ],
    'plugin-image-zoom'
  ],
  presets: [
    [
      "classic",
      {
        docs: {
        path: "pages",
        routeBasePath: "pages", // URL path prefix
        sidebarPath: false,
      },
        theme: {
          customCss: [
            require.resolve("./src/css/fonts.css"),
            require.resolve("./src/css/custom.css"),
            ],
          },
        },
      ],
  ],
  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap",
      type: "text/css",
    },
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
      type: "text/css",
    },
  ],
  themes: ["@docusaurus/theme-mermaid",
    '@saucelabs/theme-github-codeblock', '@docusaurus/theme-live-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    /*
      algolia: {
        apiKey: 'XXXXXXXXXXXXXX',
        appId: 'XXXXXXXXXXXX',
        indexName: 'tritonAI',
      },*/
      image: "img/iota-doc-og.png",
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      colorMode: {
        defaultMode: "dark",
      },
      announcementBar: {
        id: "new_triton_ai_website",
        content:
          '🚀 Welcome to the new <strong>Triton AI</strong> website! 🚀',
        isCloseable: false,
        backgroundColor: "#003153",
        textColor: "#FFFFFF",
      },
      navbar: {
        title: "Triton AI",
        logo: {
          alt: "Triton AI Logo Blue",
          src: "/logo/LOGO Blue.png",
        },
       items: [
                {
                  label: "About Us",
                  position: "right",
                  items: [
                          { label: "Mission Statement", to: "about/mission" },
                          { label: "Recognitions", to: "about/recognitions" },
                       ],
                     },
                {
                  label: "Teams",
                  to: "/team",
                  position: "right",
                  items: [
                          { label: "GoKart", to: "teams/gokart/2024" },
                          { label: "F1Tenth", to: "teams/f1tenth/2024" },
                          { label: "RobotX", to: "teams/robotx/2024" },
                        ],
                },
                {
                  label: "Sponsors",
                  position: "right",
                  items: [
                          { label: "Become a Sponsor", to: "/sponsorship" },
                          { label: "Current Sponsors", to: "/sponsors" },
                          ],
                }

              ],
            },
      socials: [
        'https://www.youtube.com/c/iotafoundation',
        'https://www.github.com/iotaledger/',
        'https://discord.gg/iota-builders',
        'https://discord.iota.org/',
        'https://www.twitter.com/iota/',
        'https://www.reddit.com/r/iota/',
        'https://www.linkedin.com/company/iotafoundation/',
        'https://www.instagram.com/iotafoundation/',
      ],
      prism: {
        theme: themes.vsLight,
        darkTheme: themes.vsDark,
        additionalLanguages: ["rust", "typescript", "solidity", "move"],
      },
      imageZoom: {
        selector: '.markdown img',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          background: 'rgba(0, 0, 0, 0.6)',
        },
      }
    }),
};

export default config;
