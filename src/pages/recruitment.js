import React from 'react';
import Layout from '@theme/Layout';
import styles from './/css/recruitment.module.css';

const RECRUITMENT_OPEN = false; // ← Toggle this to enable/disable the form, takes true or false

export default function RecruitmentPage() {
  return (
    <Layout title="Recruitment – Join Triton AI">
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Join Triton AI</h1>
          <p>
            Whether you're into robotics, software, AI, or just eager to build—
            Triton AI is always looking for passionate builders.
          </p>
        </div>

        {RECRUITMENT_OPEN ? (
          <form
            className={styles.form}
            action="https://formsubmit.co/d3shin@ucsd.edu"
            method="POST"
            encType="multipart/form-data"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <label>
              Full Name
              <input type="text" name="name" required />
            </label>

            <label>
              Email Address
              <input type="email" name="email" required />
            </label>

            <label>
              Tell us why you’re interested
              <textarea name="message" rows="6" required />
            </label>

            <label>
              Upload Resume (optional)
              <input type="file" name="attachment" accept=".pdf,.doc,.docx" />
            </label>

            <button type="submit">Submit Application</button>
          </form>
        ) : (
          <div className={styles.closedBox}>
            <h2>🚫 Recruitment is currently closed for this quarter.</h2>
            <p>
              Follow us on Discord or social media for updates on our next cycle.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}

