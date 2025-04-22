// Copyright (c) Mysten Labs, Inc.
// Modifications Copyright (c) 2024 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

import React from "react";

import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import heroCardBg from "@site/static/img/index/PORFILEPIC2.jpg";
import heroCardBg1 from "@site/static/img/index/PORFILEPIC2.jpg";
import heroCardBg2 from "@site/static/img/index/PORFILEPIC2.jpg";
export default function Home() {
  const HomeCard = (props) => {
    const { title, children, heroCardBg } = props;

    return (
      <div className={`p-px col-span-3 w-[350px]`}>
        <div
          className={styles.card}
          style={{
            background: `black url(${heroCardBg}) no-repeat center`,
          }}
        >
          {title && <h4 className="h4 text-white">{title}</h4>}
          <div className={styles.cardLinksContainer}>{children}</div>
        </div>
      </div>
    );
  };
  const HomeCardCTA = (props) => {
    const { children } = props;
    return (
      <div className={`p-px col-span-3 w-[350px]`}>
        <div
          className={styles.cardCTA}
          style={{
            background: `black url(${heroCardBg}) no-repeat top`,
          }}
        >
          <div className={styles.cardLinksContainer}>{children}</div>
        </div>
      </div>
    );
  };

  return (
    <Layout
      style={{
        background: "var(--iota-black)",
      }}
    >
      {" "}
      <div className="bg-tai-blue overflow-hidden">
        <div className={styles.backgroundImage}>
          <div className="w-full mt-24 mb-12 mx-auto">
            <div className={styles.heroText}>
              <h1 className="text-5xl center-text text-white">
               
              </h1>
              <h2
                className="h2 text-gray center-text h3"
                style={{ fontSize: "24px" }}
              >
               Explore artifical intelligence and robotics through hands-on projects and competition.
              </h2>
              <Link
                to="/developer/getting-started"
                className="button-cta"
              >
                Latest News
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-2 max-w-[1066px] mx-auto">
          <HomeCard title="About TritonAI" heroCardBg={heroCardBg}>
            <Link className={styles.cardLink} to="./topic1">
              Topic 1
            </Link>
            <Link className={styles.cardLink} to="./topic2">
              Topic 2
            </Link>
            <Link className={styles.cardLink} to="./topic3">
              Topic 3
            </Link>
          </HomeCard>
          <HomeCard title="Teams" heroCardBg={heroCardBg1}>
            <Link
              className={styles.cardLink}
              to="./GoKart"
            >
              GoKart
            </Link>
            <Link className={styles.cardLink} to="./f1tenth">
              F1Tenth
            </Link>
            <Link
              className={styles.cardLink}
              to="./robotx"
            >
              Robotx
            </Link>
          </HomeCard>
          <HomeCard
            title="Getting Involved"
            heroCardBg={heroCardBg2}
          >
            <Link
              className={styles.cardLink}
              to="./topic4"
            >
              Topic4
            </Link>
            <Link
              className={styles.cardLink}
              to="./topic5"
            >
              Topic5
              <span className="block bg-auto bg-[url(/img/index/right-arrow.svg)]"></span>
            </Link>
          </HomeCard>
          <HomeCard title="Support TritonAI" aux heroCardBg={heroCardBg1}>
            <Link
              className={styles.cardLink}
              to="./sponsors"
            >
              Become a Sponsor
            </Link>
            <Link className={styles.cardLink} to="/supportmethod2">
              Support Method 2
            </Link>
            <Link
              className={styles.cardLink}
              to="./supportmethod3"
            >
              Support Method 3
            </Link>
            <Link
              className={styles.cardLink}
              to="./supportmethod4"
            >
              Support Method 4
            </Link>
          </HomeCard>
          <HomeCard title="Stay Connected" aux heroCardBg={heroCardBg2}>
            <Link
              className={styles.cardLink}
              to="https://discord.gg/ZzfBGvG3FF"
            >
              Discord
            </Link>
            <Link className={styles.cardLink} to="https://linkedin.com/company/triton-ai-ucsd">
              LinkedIn
            </Link>
            
          </HomeCard>
        </div>

        <div className={styles.sectionHeader}>
          <h2 className="h1 text-white font-twkeverett">Filler Text?</h2>
          <h3 className="h3 text-gray text-center">
            abracadabra
          </h3>
        </div>
        <div className={styles.why}>
          <div className={styles.whyImgCard}>
            <img height={"100%"} src="/img/index/PORFILEPIC.jpg" alt="Decorative visual" />
          </div>
          <div className={styles.cardsB}>
            <div className={styles.cardB}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3337 3.99902V13.3324H25.3337L14.667 27.999V18.6657H6.66699L17.3337 3.99902Z"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Unmatched scalability, instant settlement</span>
            </div>
            <div className={styles.cardB}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5664 12H15.5996"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5664 17.333H22.5171"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5664 22.667H22.5171"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="8.76855"
                  y="3.67871"
                  width="20.6312"
                  height="24.6722"
                  rx="2"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                />
                <path
                  d="M8.60445 17.6113L3.21655 17.6113C3.09911 17.6113 3.00391 17.7065 3.00391 17.824V25.4746C3.00391 27.0627 4.29131 28.3501 5.87941 28.3501V28.3501C7.46751 28.3501 8.75492 27.0627 8.75492 25.4746V23.1274"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6.20703 28.3496H13.3685"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <span>
                A safe smart contract language accessible to mainstream
                developers
              </span>
            </div>
            <div className={styles.cardB}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 20.0007H7.33333C6.44928 20.0007 5.60143 19.6495 4.97631 19.0243C4.35119 18.3992 4 17.5514 4 16.6673C4 15.7833 4.35119 14.9354 4.97631 14.3103C5.60143 13.6852 6.44928 13.334 7.33333 13.334H8"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.0002 16V24.6667C20.0002 25.5507 19.649 26.3986 19.0239 27.0237C18.3987 27.6488 17.5509 28 16.6668 28C15.7828 28 14.9349 27.6488 14.3098 27.0237C13.6847 26.3986 13.3335 25.5507 13.3335 24.6667V24"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 12H24.6667C25.5507 12 26.3986 12.3512 27.0237 12.9763C27.6488 13.6014 28 14.4493 28 15.3333C28 16.2174 27.6488 17.0652 27.0237 17.6904C26.3986 18.3155 25.5507 18.6667 24.6667 18.6667H24"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16V7.33333C12 6.44928 12.3512 5.60143 12.9763 4.97631C13.6014 4.35119 14.4493 4 15.3333 4C16.2174 4 17.0652 4.35119 17.6904 4.97631C18.3155 5.60143 18.6667 6.44928 18.6667 7.33333V8"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Ability to define rich and composable on-chain assets</span>
            </div>
            <div className={styles.cardB}>
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4.21191"
                  y="5.48926"
                  width="9.42373"
                  height="9.42373"
                  rx="2"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                />
                <rect
                  x="16.4422"
                  y="8.47931"
                  width="9.42373"
                  height="9.42373"
                  rx="2"
                  transform="rotate(-30 16.4422 8.47931)"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                />
                <rect
                  x="4.21191"
                  y="19.4453"
                  width="9.42373"
                  height="9.42373"
                  rx="2"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                />
                <rect
                  x="18.166"
                  y="19.4453"
                  width="9.42373"
                  height="9.42373"
                  rx="2"
                  stroke="#C0DEFF"
                  strokeWidth="2"
                />
              </svg>

              <span>Better user experience for web3 apps</span>
            </div>
          </div>
        </div>
        <div className={styles.TwoColParagraph}>
          <div className={styles.TwoColItem}>
            <span>Hands-On, Real Impact</span>
            <p>
              At TritonAI, you don't just observe. You build, iterate, debug, and deliver. From day one, you'll work directly with real sensors, embedded systems, and robotic platforms used in industry. Whether you're integrating hardware, software, or debugging an error in the lab, your work has a direct impact. 
            </p>
          </div>
          <div className={styles.TwoColItem}>
            <span>Intelligent Systems</span>
            <p>
              Our projects use real world technologies provided by real industry companies. From integrating high-precision GNSS for global positioning to using LIDAR and stereo depth for spatial awareness, we work across the full robotics stack.  
            </p>
          </div>
          <div className={styles.TwoColItem}>
            <span>Challenge Yourself</span>
            <p>
              Get ready to be challenged. We solve real integration problems with real hardware. From debugging tricky sensors to configuring Docker environments, we constantly adapt to new tools, dependencies, and frameworks. We work on complex electronics, design custom 3D printed parts, build advanced ROS2 systems, and handle real-time data. We're in the lab all the time, not because we have to, but because we enjoy the challenge. 
            </p>
          </div>
          <div className={styles.TwoColItem}>
            <span>Build to Win</span>
            <p>
              We're not just building to learn but also building to win. Our project teams push each system to its limits, tuning for performance, reliability, and speed. If you're excited by the idea of this, join us and be part of a team that turns ambition into performance.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
