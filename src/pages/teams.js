import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from ".//css/teams.module.css";

import gokartImg from "@site/static/img/team/gokart_3.jpg";
import f1tenthImg from "@site/static/img/index/robocarportrait.jpg";
import iacImg from "@site/static/img/index/iac.jpg";
import inspirationImg from "@site/static/img/index/inspiration.jpg";

const ProjectCard = ({ title, image, link }) => (
  <Link to={link} className={styles.projectCard}>
    <div
      className={styles.projectImage}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay}>
        <h2>{title}</h2>
      </div>
    </div>
  </Link>
);

export default function TeamsLanding() {
  return (
    <Layout title="Past Teams – Triton AI">
      <div className={styles.container}>
        <h1 className={styles.title}>Explore Our Teams</h1>
        <h2>Our flagship projects include GoKart and F1Tenth, with active collaborations on Indy Autonomous Challenge and Project Inspiration</h2>
        <div className={styles.cardGrid}>
          <ProjectCard title="GoKart" image={gokartImg} link="/teams/gokart" />
          <ProjectCard title="F1Tenth" image={f1tenthImg} link="/teams/f1tenth" />
          <ProjectCard title="Indy Autonomous Car" image={iacImg} link="https://www.airacingtech.com/" />
          <ProjectCard title="Inspiration" image={inspirationImg} link="https://www.teaminspiration.global" />
        </div>
      </div>
    </Layout>
  );
}

