import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useGlobalData from "@docusaurus/useGlobalData";
import styles from "./css/index.module.css";

import heroCardBg from "@site/static/img/index/PORFILEPIC2.jpg";
import GOKART from "@site/static/img/index/gokart.jpg";
import F1TENTH from "@site/static/img/index/robocarportrait.jpg";
import ROBOTX from "@site/static/img/index/robotxteamphoto.jpg";
import IAC from "@site/static/img/index/iac.jpg";

const HomeCard = ({ title, heroCardBg, to }) => (
  <Link to={to} className={`${styles.homeCardLink} p-px col-span-3 w-[350px]`}>
    <div
      className={styles.card}
      style={{
        background: `black url(${heroCardBg}) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      {title && <h4 className="h4 text-white">{title}</h4>}
    </div>
  </Link>
);

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const globalData = useGlobalData();

  const newsPlugin =
    globalData["plugin-content-blog-news"]?.default?.blogPosts ?? [];
  const recentNews = Array.isArray(newsPlugin)
    ? newsPlugin.slice(0, 3)
    : [];

  return (
    <Layout title="Triton AI">
      <div className={styles.container}>
        {/* Hero */}
        <div className={styles.heroFull} id="hero">
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <img
              src="/logo/LOGO Blue.png"
              alt="TritonAI Logo"
              className={styles.heroLogo}
            />
            <h1 className={styles.heroTitle}>Triton AI</h1>
            <p className={styles.heroSubtitle}>
              Building robots that learn, compete, and inspire.
            </p>
            <div
                className={styles.scrollIndicator}
                id="scroll-arrow"
                onClick={() => {
                const el = document.getElementById("nextSection");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                }}>
                 ⌄
          </div>

          </div>
        </div>

        {/* Intro */}
          <div id="nextSection" className={styles.sectionHeader}>
            <h3>
              We're not just a club — we're a robotics team driven by curiosity...
            </h3>
            <Link to="/latest" className="button-cta">
             Latest News
            </Link>
          </div>


        {/* TwoColParagraph */}
        <div className={styles.TwoColParagraph}>
          <div className={styles.TwoColItem}>
            <span>Hands-On, Real Impact</span>
            <p>
              At TritonAI, you don't just observe. You build, iterate, debug,
              and deliver. From day one, you'll work directly with real sensors,
              embedded systems, and robotic platforms used in industry.
            </p>
          </div>
          <div className={styles.TwoColItem}>
            <span>Intelligent Systems</span>
            <p>
              We integrate high-precision GNSS, LIDAR, stereo vision, and more
              to build robust robotics pipelines across the autonomy stack.
            </p>
          </div>
          <div className={styles.TwoColItem}>
            <span>Challenge Yourself</span>
            <p>
              Get ready to be challenged. From debugging tricky sensors to
              configuring Docker environments, we tackle full-stack robotics
              challenges in hardware and software.
            </p>
          </div>
          <div className={styles.TwoColItem}>
            <span>Build to Win</span>
            <p>
              We don’t just build to learn — we build to win. Our teams tune
              every system for reliability and performance in high-stakes
              competitions.
            </p>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="flex flex-row flex-wrap justify-center gap-2 max-w-[1066px] mx-auto">
          <HomeCard
            title="About TritonAI"
            heroCardBg={heroCardBg}
            to="/about/mission"
          />
          <HomeCard title="Teams" heroCardBg={GOKART} to="/teams" />
          <HomeCard
            title="Getting Involved"
            heroCardBg={F1TENTH}
            to="/recruitment"
          />
          <HomeCard
            title="Support TritonAI"
            heroCardBg={ROBOTX}
            to="/sponsorship"
          />
          <HomeCard
            title="Stay Connected"
            heroCardBg={IAC}
            to="/contacts"
          />
        </div>

        {/* News Section */}
        <section className={styles.newsSection}>
          <h2>📰 Latest News</h2>
          <p>See how Triton AI is being recognized across platforms.</p>
          <div className={styles.newsList}>
            {recentNews.map((post) => (
              <Link
                key={post.metadata.permalink}
                to={post.metadata.permalink}
              >
                <div className={styles.newsCard}>
                  <h4>{post.metadata.title}</h4>
                  <p>
                    {post.metadata.description ?? "Click to read the full post."}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <Link className="button button--primary" to="/news">
            View All Coverage
          </Link>
        </section>
      </div>
    </Layout>
  );
}

