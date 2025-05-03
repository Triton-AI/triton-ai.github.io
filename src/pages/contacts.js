import React from "react";
import Layout from "@theme/Layout";
import styles from ".//css/contacts.module.css";

const InstagramIcon = () => (
  <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a.88.88 0 1 1 0 1.76.88.88 0 0 1 0-1.76z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className={styles.socialIcon} viewBox="0 0 448 512" fill="currentColor">
    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.34 108 0 83.66 0 53.84 0 24.02 24.34 0 53.84 0s53.84 24.34 53.84 53.84c0 29.82-24.34 54.16-53.84 54.16zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.6 0-37.6 15.9-43.8 31.3-2.2 5.4-2.8 13-2.8 20.6V448h-92.68V148.9h92.68v40.8h1.3c12.9-24.5 44.5-50.2 91.5-50.2 65.4 0 114.6 42.8 114.6 134.7V448z" />
  </svg>
);

const DiscordIcon = () => (
  <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515c-.211.375-.444.864-.608 1.248a19.736 19.736 0 0 0-5.49 0c-.207-.384-.414-.874-.617-1.248a19.735 19.735 0 0 0-4.885 1.515c-.03.01-.053.03-.075.055C.533 9.046-.32 13.59.099 18.081a.084.084 0 0 0 .031.057 19.911 19.911 0 0 0 5.993 3.058c.462-.63.874-1.295 1.226-1.994a13.145 13.145 0 0 1-1.885-.9.076.076 0 0 1 .374-.291c3.927 1.794 8.18 1.794 12.061 0 .12.099.247.195.374.291a12.744 12.744 0 0 1-1.886.899 12.395 12.395 0 0 0 1.225 1.993 19.888 19.888 0 0 0 6.002-3.058c.5-5.177-.838-9.673-3.548-13.685a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.093 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.093 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" />
  </svg>
);

export default function ContactUs() {
  return (
    <Layout title="Contact Us – Triton AI">
      <div className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroText}>
            <h1>Contact Triton AI</h1>
            <p>Collaborate. Sponsor. Build with us.</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.infoSection}>
          <h2>Sponsorship & Partnerships</h2>
          <p>
            Download our <a href="/docs/sponsorship-packet.pdf">2025 Sponsorship Packet</a><br/>
            Email us at <a href="mailto:tritonai@ucsd.edu">tritonai@ucsd.edu</a>
          </p>
        </section>

        <section className={styles.infoSection}>
          <h2>General Inquiries</h2>
          <p>Email: <a href="mailto:tritonai@ucsd.edu">tritonai@ucsd.edu</a></p>
        </section>

        <section className={styles.socialSection}>
          <h2>Follow Us</h2>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com/tritonai" target="_blank" rel="noopener noreferrer" title="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com/company/tritonai" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://discord.gg/your-invite" target="_blank" rel="noopener noreferrer" title="Discord">
              <DiscordIcon />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

