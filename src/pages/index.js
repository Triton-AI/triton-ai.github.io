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
import GOKART from "@site/static/img/index/gokart.jpg";
import F1TENTH from "@site/static/img/index/robocarportrait.jpg";
import ROBOTX from "@site/static/img/index/robotxteamphoto.jpg";
import IAC from "@site/static/img/index/iac.jpg";

export default function Home() {
  const HomeCard = (props) => {
    const { title, heroCardBg, to } = props;

    return (
      <Link to={to} className={`${styles.homeCardLink} p-px col-span-3 w-[350px]`}>
        <div
          className={styles.card}
          style={{
            background: `black url(${heroCardBg}) no-repeat center`,
            backgroundSize: 'cover',
          }}
        >
          {title && <h4 className="h4 text-white">{title}</h4>}
        </div>
      </Link>
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
      <div className={styles.container}>
        <div className={styles.backgroundImage}>
          <div className="w-full mt-24 mb-12 mx-auto">
            <div className={styles.heroText}>
              <h1 className="text-5xl center-text text-white">
               
              </h1>
            </div>
          </div>
        </div>
 
        <div className={styles.sectionHeader}>
          <h3>
            We're not just a club — we're a robotics team driven by curiosity and results. <br/>
            Explore artifical intelligence and robotics through hands-on projects and competition.
          </h3> 
           <Link
                to="/latest"
                className="button-cta"
              >
                Latest News
              </Link>
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


      
        <div className="flex flex-row flex-wrap justify-center gap-2 max-w-[1066px] mx-auto">
          <HomeCard 
            title="About TritonAI" 
            heroCardBg={heroCardBg}
            to="/about"
          >
          </HomeCard>
          <HomeCard 
            title="Teams" 
            heroCardBg={GOKART}
            to="/about"
            >
          </HomeCard>
          <HomeCard
            title="Getting Involved"
            heroCardBg={F1TENTH}
            to="/about"
          >
          </HomeCard>
          <HomeCard 
            title="Support TritonAI" 
            heroCardBg={ROBOTX}
            to="/about"
          >
          </HomeCard>
          <HomeCard 
            title="Stay Connected"
            heroCardBg={IAC}
            to="/about"
          >
        </HomeCard>
        </div>
      </div>
    </Layout>
  );
}
