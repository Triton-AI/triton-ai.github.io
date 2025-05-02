import React from "react";
import Layout from "@theme/Layout";
import styles from "./team.module.css";

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="currentColor" className={styles.linkedinIcon}>
    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.34 108 0 83.66 0 53.84 0 24.02 24.34 0 53.84 0s53.84 24.34 53.84 53.84c0 29.82-24.34 54.16-53.84 54.16zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.4-58.4-23.6 0-37.6 15.9-43.8 31.3-2.2 5.4-2.8 13-2.8 20.6V448h-92.68V148.9h92.68v40.8h1.3c12.9-24.5 44.5-50.2 91.5-50.2 65.4 0 114.6 42.8 114.6 134.7V448z" />
  </svg>
);

const TeamMember = ({ name, role, link, image }) => (
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

export default function GoKartTeam() {
  return (
    <Layout title="Go-Kart Team – Triton AI">
      <div className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroText}>
            <h1>Go-Kart Team</h1>
            <p>Competing at the edge of autonomy in the Autonomous Karting Series (AKS).</p>
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

        <section>
          <h2 className={styles.sectionTitle}>Mentors</h2>
          <div className={styles.grid}>
            <TeamMember
              name="Jack Silberman"
              role="Engineering Lecturer at UCSD"
              link="https://www.linkedin.com/in/jacksilberman"
              image="/img/team/silberman.png"
            />
          </div>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Core Members</h2>
          <div className={styles.grid}>
            <TeamMember name="Matthew Pope" role="UCSD" image="/img/team/pope.jpeg" />
            <TeamMember name="Winston Chou" role="UCSD" image="/img/team/winston.jpeg" />
            <TeamMember name="Aryan Palaskar" role="UCSD" image="/img/team/aryan.jpeg" />
            <TeamMember name="Jeff Bratman" role="UCSD" image="/img/team/jeff.jpg" />
            <TeamMember name="Alexander Haken" role="UCSD" image="/img/team/alex.jpeg" />
            <TeamMember name="Andrew Dunker" role="UCSD" image="/img/team/andrew.jpeg" />
            <TeamMember name="Jingli Zhou" role="UCSD" image="/img/team/jingli.jpeg" />
            <TeamMember name="Daniel Warren" role="UCSD" image="/img/team/daniel.jpeg" />
            <TeamMember name="Kevin Shin" role="UCSD" image="/img/team/kevin.jpeg" />
          </div>
        </section>
      </div>
    </Layout>
  );
}

