import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./sponsors.module.css";
import goldBg from "@site/static/img/index/heroCardBg.png";
import silverBg from "@site/static/img/index/heroCardBg1.png";
import bronzeBg from "@site/static/img/index/heroCardBg2.png";

const HomeCard = ({ title, children, heroCardBg, to }) => {
  return (
    <Link to={to} className={styles.cardWrapper}>
      <div
        className={styles.card}
        style={{
          background: `black url(${heroCardBg}) no-repeat top / cover`,
        }}
      >
        {title && <h4 className="h4 text-white">{title}</h4>}
        <div className={styles.cardLinksContainer}>{children}</div>
      </div>
    </Link>
  );
};

export default function SponsorshipPage() {
  return (
    <Layout title="Support Triton AI">
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className="h1 text-white">Support Triton AI</h1>
          <p className="h3 text-gray text-center max-w-2xl mx-auto">
            Partner with us to power innovation in robotics, autonomy, and AI.
            Triton AI proudly works with industry leaders to develop next-gen engineering talent.
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-4 max-w-[1066px] mx-auto">
          <HomeCard title="Gold" heroCardBg={goldBg} to="https://www.zeffy.com/en-US/donation-form/ace63637-81f0-43a8-b1e8-57d86cfa3d1f">
            <div className={styles.tierDetails}>
              <div className={`${styles.tierBadge} ${styles.gold}`}>$2000+</div>
              <ul className={styles.benefitsList}>
                <li>🟡 Big logo on Triton AI shirt and Go Kart</li>
                <li>🌐 Big logo on website & social media</li>
                <li>🎥 Logo on Zoom background</li>
                <li>🔬 Open source sponsored research</li>
                <li>🤖 Company challenge or feature proposals</li>
              </ul>
            </div>
          </HomeCard>

          <HomeCard title="Silver" heroCardBg={silverBg} to="https://www.zeffy.com/en-US/donation-form/ace63637-81f0-43a8-b1e8-57d86cfa3d1f">
            <div className={styles.tierDetails}>
              <div className={`${styles.tierBadge} ${styles.silver}`}>$1000+</div>
              <ul className={styles.benefitsList}>
                <li>🟡 Medium logo on Triton AI shirt and Go Kart</li>
                <li>🌐 Medium logo on website & social media</li>
                <li>🎥 Logo on Zoom background</li>
                <li>🔬 Open source sponsored research</li>
              </ul>
            </div>
          </HomeCard>

          <HomeCard title="Bronze" heroCardBg={bronzeBg} to="https://www.zeffy.com/en-US/donation-form/ace63637-81f0-43a8-b1e8-57d86cfa3d1f">
            <div className={styles.tierDetails}>
              <div className={`${styles.tierBadge} ${styles.bronze}`}>$500+</div>
              <ul className={styles.benefitsList}>
                <li>🟡 Small logo on Triton AI shirt and Go Kart</li>
                <li>🌐 Small logo on website & social media</li>
                <li>🎥 Logo on Zoom background</li>
              </ul>
            </div>
          </HomeCard>
        </div>

        <div className={styles.ctaSection}>
          <p>
            Want to become a sponsor? Contact us at{" "}
            <a href="mailto:triton-ai@ucsd.edu">triton-ai@ucsd.edu</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

