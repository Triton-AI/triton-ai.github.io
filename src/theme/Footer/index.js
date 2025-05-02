import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerRow}>
          <div className={styles.logoSection}>
            <img src="/logo/ucsd-jsoe-hdsi-tritonai.png" alt="Triton AI Logo" />
          </div>


          <div className={styles.sponsorSection}>
            <span className={styles.sponsorLabel}>Official Sponsor</span>
            <a href="https://www.nvidia.com/" target="_blank" rel="noopener">
              <img src="/img/sponsors/nvidia.jpg" alt="NVIDIA" />
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          © {currentYear} <a href="https://triton-ai.github.io/">Triton AI</a>,
          licensed under <a href="https://github.com/iotaledger/iota/blob/develop/docs/site/LICENSE">CC BY 4.0</a>.
        </div>
      </div>
    </footer>
  );
}

