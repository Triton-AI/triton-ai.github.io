import React from 'react';
import Layout from '@theme/Layout';
import styles from './sponsors.module.css';

const sponsors = {
  gold: [
    {
      name: 'FILLER IMAGE 1',
      logo: '/img/sponsors/nvidia.jpg',
      url: 'https://www.nvidia.com',
    },
  ],
  silver: [
    {
      name: 'Qualcomm',
      logo: '/img/sponsors/qualcomm.jpeg',
      url: 'https://www.qualcomm.com',
    },
    {
      name: 'Intel',
      logo: '/img/sponsors/intel.png',
      url: 'https://www.intel.com',
    },
  ],
  bronze: [
    {
      name: 'UC San Diego',
      logo: '/img/sponsors/ucsd.png',
      url: 'https://ucsd.edu',
    },
  ],
};

export default function SponsorshipPage() {
  return (
    <Layout title="Sponsor Triton AI">
      <div className={styles.container}>
        <header className={styles.hero}>
  <h1>Our Sponsors</h1>
  <p>
    Triton AI is proud to be supported by innovative companies and organizations that believe in the future of robotics. Thank you for helping us engineer what's next.
  </p>
  <a href="/sponsorship" className={styles.ctaButton}>
    Become a Sponsor
  </a>
</header>


        <section className={styles.tiers}>
          {Object.entries(sponsors).map(([tier, companies]) => (
            <div key={tier} className={styles.tierSection}>
              <h3 className={styles.tierTitle}>{tier.charAt(0).toUpperCase() + tier.slice(1)}</h3>
              <h3> THESE ARE FILLERS </h3>
              <div className={styles.logoGrid}>
                {companies.map(({ name, logo, url }) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={styles.logoCard}>
                    <img src={logo} alt={name} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}

