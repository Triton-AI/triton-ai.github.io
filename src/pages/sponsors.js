import React from 'react';
import Layout from '@theme/Layout';
import styles from './/css/sponsors.module.css';

const sponsors = {
  gold: [
    {
      name: 'AWS DeepRacer',
      logo: '/img/sponsors/deepracer.png',
      url: 'https://aws.amazon.com/deepracer/',
    },
    {
      name: 'Brain Corp',
      logo: '/img/sponsors/brain_corp.png',
      url: 'https://www.braincorp.com/',
    },
    {
      name: 'Robosense',
      logo: '/img/sponsors/robosense.png',
      url: 'https://www.robosense.ai/en',
    },
  ],
  silver: [
    {
      name: 'Livox',
      logo: '/img/sponsors/livox.png',
      url: 'https://www.livoxtech.com/',
    },
  ],
  bronze: [
  ],
  general: [
    {
      name: 'Tesc',
      logo: '/img/sponsors/tesc.png',
      url: 'https://tesc.ucsd.edu/',
    },
    {
      name: 'Viasat',
      logo: '/img/sponsors/viasat.png',
      url: 'https://www.viasat.com/',
    },

  ]
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

