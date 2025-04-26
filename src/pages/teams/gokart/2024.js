import React from "react";
import Layout from "@theme/Layout";
import styles from "./team.module.css";

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="24"
    height="24"
    fill="currentColor"
    className={styles.linkedinIcon}
  >
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

export default function Team() {
  return (
    <Layout title="Meet the Team">
      <div className={styles.container}> 
        
        <section>
          <h2 className={styles.sectionTitle}>Mentors</h2>
          <div className={styles.grid}>
            <TeamMember 
              name="Jack Silberman"
              role="Engineering Lecturer at UCSD" 
              link="/in/jacksilberman"
              image="/img/team/silberman.png"/>
          </div>
        </section>


        <section>
          <h2 className={styles.sectionTitle}>Section Title</h2>
          <div className={styles.grid}>
                        <TeamMember 
              name="Matthew Pope"
              role="UCSD" 
              link="/in/jacksilberman"
              image="/img/team/pope.jpeg"/>
                        <TeamMember 
              name="Winston Chou"
              role="UCSD" 
              link="/in/jacksilberman"
              image="/img/team/winston.jpeg"/>
                        <TeamMember 
              name="Aryan Palaskar"
              role="UCSD" 
              link="/in/jacksilberman"
              image="/img/team/aryan.jpeg"/>
                        <TeamMember 
              name="Jeff Bratman"
              role="UCSD" 
              link="/in/jacksilberman"
              image="/img/team/jeff.jpg"/>
                        <TeamMember 
              name="Alexander Haken"
              role="UCSD" 
              link="/in/jacksilberman"
              image="/img/team/alex.jpeg"/>
                        <TeamMember 
              name="Andrew Dunker"
              role="UCSD" 
              link="/in/jacksilberman"
              image="/img/team/andrew.jpeg"/>
                        <TeamMember 
              name="Jingli Zhou"
              role="UCSD" 
              link="/in/jacksilberman"
              image="/img/team/jingli.jpeg"/>
                      <TeamMember 
              name="Daniel Warren"
              role="UCSD" 
              link="/in/jacksilberman"
              image="/img/team/daniel.jpeg"/>
                        <TeamMember 
              name="Kevin Shin"
              role="UCSD" 
              link="/in/jacksilberman"
              image="/img/team/kevin.jpeg"/>
          </div>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Section Title</h2>
          <div className={styles.grid}>
                        <TeamMember 
              name="Jack Silberman"
              role="Engineering Lecturer at UCSD" 
              link="/in/jacksilberman"
              image="/img/team/silberman.png"/>
                        <TeamMember 
              name="Jack Silberman"
              role="Engineering Lecturer at UCSD" 
              link="/in/jacksilberman"
              image="/img/team/silberman.png"/>
        </div>
        </section>

      </div>
    </Layout>
  );
}
