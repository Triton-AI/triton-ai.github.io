import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./team.module.css";

const TeamCard = ({ year, link }) => (
  <Link to={link} className={styles.card}>
    <div className={styles.cardContent}>
      <h2>{year}</h2>
      <p>View Team Members</p>
    </div>
  </Link>
);

export default function TeamsLanding() {
  return (
    <Layout title="Past Teams">
      <div className={styles.container}>
        <h1 className={styles.title}>Explore Our Past Teams</h1>

        <div className={styles.projectRow}>
          <div className={styles.projectBlock}>
            <h2 className={styles.projectTitle}>GoKart</h2>
            <div className={styles.grid}>
              <TeamCard year="2024" link="/teams/gokart/2024" />
            </div>
          </div>

          <div className={styles.projectBlock}>
            <h2 className={styles.projectTitle}>F1Tenth</h2>
            <div className={styles.grid}>
              <TeamCard year="2024" link="/teams/f1tenth/2024" />
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}

