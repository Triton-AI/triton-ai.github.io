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
            <h2>Since 2021</h2>
            <p>
              Triton AI has proudly competed in the <strong>Autonomous Karting Series (AKS)</strong>, a premier collegiate tournament hosted annually at Purdue University. The competition brings together top engineering institutions, including Purdue, UC Berkeley, and UC Riverside, to push the limits of autonomous driving technology on 1:1 scale electric go-karts.
            </p>
          </div>
          <div className={styles.splitImage}>
            <img src="/img/team/gokart_1.png" />
          </div>
        </section>

        <section className={styles.splitSectionAlt}>
          <div className={styles.splitImage}>
            <img src="/img/team/gokart_5.jpg" />
          </div>
          <div className={styles.splitText}>
            <h2>State-of-the-Art Systems</h2>
            <p>
              At Triton AI, we are advancing the limits of autonomous mobility with our custom-designed electric go-kart, equipped with state-of-the-art sensors such as depth-sensing cameras, GPS/IMU systems, and LiDAR. These technologies allow us to develop and refine cutting-edge autonomous driving techniques, from perception and localization to planning and control, under the same real-world conditions faced by industry.
            </p>
          </div>
        </section>

        <section className={styles.splitSection}>
          <div className={styles.splitText}>
            <h2>Designed from the Ground Up</h2>
            <p>
              Each team in AKS designs and builds its kart from the ground up, integrating perception, planning, and control systems to navigate a challenging, high-speed track autonomously. Teams are judged based on the speed of their autonomous laps, as well as how quickly and effectively their vehicles can maneuver around obstacles on the course.
            </p>
          </div>
          <div className={styles.splitImage}>
            <div className={styles.verticalImageGroup}>
              <img
                  src="/img/team/gokart_working.png"
                  alt="3d printing"
                  className={styles.verticalImage}/>
              </div>
          </div>
        </section>
        <section className={styles.sectionIntro}>
          <p>
            The series serves as a proving ground for our engineering decisions and offers an opportunity to benchmark our platform against some of the top robotics programs in the country. For Triton AI, AKS is more than a race, it is an opportunity to showcase innovation, learn from peer institutions, and remain on the leading edge of autonomous vehicle research.
          </p>
          <p>
            As our team continues to grow, we remain committed to pushing the boundaries of autonomy and contributing to the future of intelligent mobility.
          </p>
        </section>

        </div>
    </Layout>
  );
}

