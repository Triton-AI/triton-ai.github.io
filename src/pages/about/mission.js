import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./mission.module.css";

import F1TENTH from "@site/static/img/index/robocarportrait.jpg";
import GOKART from "@site/static/img/index/gokart.jpg";
import FUN from "@site/static/img/index/robotxteamphoto.jpg";

export default function MissionPage() {
  return (
    <Layout title="Our Mission – Triton AI" description="Discover Triton AI’s journey, technology, and vision for hands-on robotics and AI education.">
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
         <div className={styles.heroInner}>
          <p>Triton AI empowers students at UC San Diego to learn artificial intelligence and robotics by building real systems—from the ground up.</p>
        </div>
      </div>

      <section className={styles.section}>
        <h2>Our Origin</h2>
        <p>
          Triton AI is a student-led organization at UC San Diego dedicated to preparing students for careers in artificial intelligence and robotics through hands-on, project-based learning.
          Founded in 2019, the club was born out of MAE 148: Introduction to Autonomous Vehicles, where students found building self-driving cars not only educational, but genuinely fun.
        </p>
        <p>
          What began as a class project quickly grew into a full-fledged team passionate about exploring the future of autonomy.
        </p>
      </section>

      <section className={styles.sectionAlt}>
        <h2>From DonkeyCar to Jetson</h2>
        <p>
          We started with DonkeyCar to build foundational skills in embedded systems, computer vision, and control. As our capabilities grew, we shifted to ROS2, machine learning, and custom hardware platforms—enabling modular, scalable systems ready for real-world autonomy.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          We’re united by a love of cars… just without the driver. Triton AI thrives on curiosity, challenge, and the drive to shape the future of mobility.
          Whether you're drawn to low-level control or high-level AI, we give students the tools and mentorship to dive deep into the autonomy stack.
        </p>
      </section>

      <section className={styles.sectionAlt}>
        <h2>Our Technology</h2>
        <p>
          Our vehicles range from small-scale prototypes to full-sized go-karts, powered by NVIDIA Jetson platforms like the Nano and Xavier.
          We build real-time perception systems, multi-sensor fusion pipelines, and robust planning and control—all under real-world constraints.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Projects</h2>
        <div className={styles.projectCards}>
          <ProjectCard title="F1Tenth" image={F1TENTH} to="/teams/f1tenth/2024" />
          <ProjectCard title="Go-Kart (AKS)" image={GOKART} to="/teams/gokart/2024" />
          <ProjectCard title="Fun Projects" image={FUN} to="/projects/fun" />
        </div>
        <p>
          Triton AI subteams explore a variety of robotics platforms—from 1/10th scale racing cars to a full-size electric kart with full autonomy.
          Our work spans autonomous racing, obstacle avoidance, and perception pipelines.
        </p>
      </section>

      <section className={styles.callout}>
        <h2>Looking Ahead</h2>
        <p>
          We’re more than just a robotics club—we’re a community of builders, dreamers, and engineers.
          Whether you're a student eager to join or a company looking to support emerging talent, we’d love to connect.
        </p>
        <Link className={styles.button} to="/contacts">Connect With Us</Link>
      </section>
    </Layout>
  );
}

function ProjectCard({ title, image, to }) {
  return (
    <Link to={to} className={styles.projectCard}>
      <div className={styles.projectImage} style={{ backgroundImage: `url(${image})` }} />
      <div className={styles.projectTitle}>{title}</div>
    </Link>
  );
}

