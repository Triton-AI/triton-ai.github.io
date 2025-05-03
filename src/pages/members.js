import React from "react";
import Layout from "@theme/Layout";
import styles from ".//css/members.module.css";

const LinkedInIcon = () => (
  <svg
    className={styles.linkedinIcon}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="28"
    height="28"
    fill="currentColor"
  >
    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.34 108 0 83.66 0 53.84 0 24.02 24.34 0 53.84 0s53.84 24.34 53.84 53.84c0 29.82-24.34 54.16-53.84 54.16zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.6 0-37.6 15.9-43.8 31.3-2.2 5.4-2.8 13-2.8 20.6V448h-92.68V148.9h92.68v40.8h1.3c12.9-24.5 44.5-50.2 91.5-50.2 65.4 0 114.6 42.8 114.6 134.7V448z" />
  </svg>
);

const TeamMember = ({ name, role, image, link }) => (
  <div className={styles.memberCard}>
    {image && <img src={image} alt={name} className={styles.memberImage} />}
    <div className={styles.memberInfo}>
      <h3>{name}</h3>
      <p>{role}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      )}
    </div>
  </div>
);

export default function CurrentMembers() {
  return (
    <Layout title="Current Members – Triton AI">
      <div className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroText}>
            <p>Meet the minds behind Triton AI's autonomous systems and robotics platforms.</p>
          </div>
        </div>
      </div>
     

      <div className={styles.container}>
        <section>
          <h2 className={styles.sectionTitle}>Advisors</h2>
          <div className={styles.grid}>
            <TeamMember name="Jack Silberman" role="Faculty Advisor" image="/img/team/silberman.png" link="https://www.linkedin.com/in/jacksilberman" />
          </div>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Executive Board</h2>
          <div className={styles.grid}>
            <TeamMember name="Example" role="Example Role" image="/img/team/" link="https://linkedin.com/in/example" />
          </div>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Core Contributors</h2>
          <div className={styles.grid}>
            <TeamMember name="Example" role="Example Role" image="/img/team/" />
          </div>
        </section>
      </div>
    </Layout>
  );
}

