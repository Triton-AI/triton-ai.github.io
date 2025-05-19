import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './css/recruitment.module.css';
import { useLocation } from '@docusaurus/router';

const RECRUITMENT_OPEN = true;

export default function RecruitmentPage() {
  const location = useLocation();
  const submitted = typeof window !== 'undefined' && window.location.hash === '#submitted';
  const [isSubmitting, setIsSubmitting] = useState(false);

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

        {submitted ? (
          <div className={styles.closedBox}>
            <h2>✅ Thanks for applying!</h2>
            <p>We’ve received your submission. We’ll be in touch soon.</p>
          </div>
        ) : RECRUITMENT_OPEN ? (
          <form
            className={styles.form}
            action="https://formsubmit.co/d3shin@ucsd.edu"
            method="POST"
            encType="multipart/form-data"
            onSubmit={() => setIsSubmitting(true)}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value="https://triton-ai.ucsd.edu/recruitment/#submitted" />
 
            <input type="text" name="_honey" style={{ display: 'none' }} />

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

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
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

