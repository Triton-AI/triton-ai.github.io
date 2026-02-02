import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from ".//css/sponsorship.module.css";
import goldBg from "@site/static/img/sponsorship/TierBG_Gold.png";
import silverBg from "@site/static/img/sponsorship/TierBG_Sliver.png";
import bronzeBg from "@site/static/img/sponsorship/TierBG_Bronze.png";

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
          <p>Search for Triton AI with E8022</p>
          <a href="https://blink.ucsd.edu/_files/research-tab/preparing-proposals/ucsd-ein-tin-confirmation-letter.pdf">
          Taxpayer Identification Number (TIN) 95-6006144
          </a>
        </div>

        <div className={styles.tierRow}>
          <HomeCard title="Gold" heroCardBg={goldBg} to="https://giveto.ucsd.edu/giving/home/">
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

          <HomeCard title="Silver" heroCardBg={silverBg} to="https://giveto.ucsd.edu/giving/home/">
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

          <HomeCard title="Bronze" heroCardBg={bronzeBg} to="https://giveto.ucsd.edu/giving/home/">
            <div className={styles.tierDetails}>
              <div className={`${styles.tierBadge} ${styles.bronze}`}>$500+</div>
              <ul className={styles.benefitsList}>
                <li>🟡 Small logo on Triton AI shirt and Go Kart</li>
                <li>🌐 Small logo on website & social media</li>
                <li>🎥 Logo on Zoom background</li>
              </ul>
            </div>
          </HomeCard>

          <div></div> 
        </div>

        <div className={styles.ctaSection}>
          <p>
            Want to become a sponsor? Contact us at {" "}
            <a href="mailto:triton-ai@ucsd.edu">triton-ai@ucsd.edu</a>
          </p>
        </div>

      </div>
    </Layout>
  )
}
