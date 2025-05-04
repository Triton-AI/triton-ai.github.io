import React from "react";
import Layout from "@theme/Layout";
import styles from "./f1tenth.module.css";

export default function F1TenthTeam() {
  return (
    <Layout title="F1Tenth Team – Triton AI">
      <div className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroText}>
            <h1>F1Tenth Team</h1>
            <p>Competing at the edge of autonomy in the F1Tenth Competitions.</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.splitSection}>
          <div className={styles.splitText}>
            <h2>Quarterly Tournaments</h2>
            <p>
              We host the quarterly <strong>San Diego Robocar Tournament</strong> on campus, providing a platform for student robotics enthusiasts to compete and showcase their autonomous vehicles on a variety of race tracks. Each quarter, we travel to Oakland, CA to represent UC San Diego at the <strong>DIY Robocars Event</strong>—one of the premier gatherings for builders and racers of DIY autonomous cars.
            </p>
          </div>
          <div className={styles.splitImage}>
            <img src="/img/team/f1tenth.png" alt="San Diego Robocar Tournament" />
          </div>
        </section>

        <section className={styles.splitSectionAlt}>
          <div className={styles.splitImage}>
            <img src="/img/team/f1tenth_local.png" alt="F1Tenth Platform Rig" />
          </div>
          <div className={styles.splitText}>
            <h2>Custom-Built Autonomy Stack</h2>
            <p>
              Our 1/10th scale autonomous vehicles are equipped with LiDAR, stereo cameras, and embedded compute to run full autonomy stacks including SLAM, path planning, and neural control. We continuously refine our systems using ROS 2 and real-time simulation environments to test new approaches at the edge of research.
            </p>
          </div>
        </section>

        <section className={styles.splitSection}>
          <div className={styles.splitText}>
            <h2>Global Virtual Racing</h2>
            <p>
              We compete in global virtual F1Tenth tournaments against top teams from Japan, Germany, and Silicon Valley. Our simulations pit us against platforms like Nvidia JetRacer, Amazon DeepRacer, and custom neural net-driven agents, giving us opportunities to benchmark and improve our autonomy under competitive conditions.
            </p>
          </div>
          <div className={styles.splitImage}>
            <div className={styles.verticalImageGroup}>
              <img
                src="/img/team/f1tenth_virtual.png"
                alt="Virtual F1Tenth Race"
                className={styles.verticalImage}
              />
            </div>
          </div>
        </section>

        <section className={styles.sectionIntro}>
          <p>
            F1Tenth gives us a fast-paced, research-driven arena to explore autonomy under real-world constraints. Whether on physical tracks or in the cloud, the competition helps our team push the boundaries of what’s possible in perception, planning, and control.
          </p>
          <p>
            As Triton AI continues to scale up, we remain committed to advancing autonomous racing technology and contributing to the broader robotics community through competition, innovation, and open collaboration.
          </p>
        </section>
      </div>
    </Layout>
  );
}

