// src/pages/index.tsx
import React, { JSX, useState } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import TelegramIcon from "../assets/telegram.svg";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
  isFirst?: boolean;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  period,
  description,
  bullets,
  isFirst = false,
  isLast = false,
}) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineMarker}>
        <div
          className={
            isFirst ? styles.firstOrLastTimelineLine : styles.timelineLine
          }
        />
        <div className={styles.timelineDot} />
        <div
          className={
            isLast ? styles.firstOrLastTimelineLine : styles.timelineLine
          }
        />
      </div>
      <div className={styles.timelineContent}>
        <h3 className={styles.timelineTitle}>{title}</h3>
        <div className={styles.timelineCompany}>{company}</div>
        <div className={styles.timelinePeriod}>{period}</div>
        <p className={styles.timelineDescription}>{description}</p>
        <ul className={styles.timelineBullets}>
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = async (text: string, type: "email" | "telegram") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.circuitPattern}></div>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <h1 className={styles.greeting}>Hey, I'm Adam.</h1>

          <p className={styles.intro}>
            A software engineering graduate with Product Management and
            Full-stack web development experience.
          </p>

          <p className={styles.description}>
            An avid explorer of blockchain technologies and traditional finance,
            I'm currently looking for my next opportunity to jumpstart my
            career.
          </p>

          <div className={styles.visionSection}>
            <h3 className={styles.greeting}>Vision:</h3>
            <p className={styles.description}>
              Blockchain technologies will take the finance world by storm and
              reshape how money moves. I strive to stay at the forefront of this
              transformation.
            </p>
          </div>

          <div className={styles.beyondSection}>
            <h3 className={styles.greeting}>Beyond Code:</h3>
            <p className={styles.description}>
              Love traveling, singing, badminton and contributing to web3
              communities and events.
            </p>
          </div>

          <div className={styles.contactSection}>
            <h3 className={styles.greeting}>Get in touch:</h3>
            <div className={styles.contactButtons}>
              <a
                href="https://t.me/adamdotmon"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactBtn}
              >
                <TelegramIcon
                  className={styles.telegramIcon}
                  aria-label="Telegram Icon"
                />
                adamdotmon
              </a>

              <button
                onClick={() =>
                  copyToClipboard("adamgse.wdmd@gmail.com", "email")
                }
                className={styles.contactBtn}
              >
                <span className={styles.emailIcon}>✉️</span>
                {copiedEmail ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Product Manager",
      company: "Binance",
      period: "Sep 2024 - Mar 2025",
      description:
        "Building features for the P2P product, supporting growth for top volume markets in South Asia.",
      bullets: [
        "Optimised P2P trading platform, boosting conversion rates by 11.4% through user flow enhancements.",
        "Spearheaded iteration and development of a new payment swap feature addressing 25% of order cancellations.",
        "Streamlined product feedback processes cutting response time from 2 - 3 weeks to 3 - 5 days.",
      ],
    },
    {
      title: "Volunteer Local Community Developer",
      company: "Monad Foundation",
      period: "March 2024 - September 2024",
      description:
        "Growing the local community arm of Singapore and Malaysia from scratch.",
      bullets: [
        "Led web3 community programs in Singapore and Malaysia, organising both online and live events.",
        "Event organiser of Monad 101 in Singapore during TOKEN2049.",
        "Grew 500+ Discord/Telegram community, setting up community contributions flywheel.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Red Airship",
      period: "May 2023 - April 2024",
      description:
        "My first role as a dev, dabbling into Full-stack web development, QA testing and systems integration.",
      bullets: [
        "Built in-house mailer system, enabling EDM communications for marketing and transaction notifications.",
        "Built an webapp used for planning distribution of city district cooling systems across Singapore, visualising electricity consumption and cost data outputted from an ML algorithm.",
        "Integrated a airport security kiosk system that issues and renews employee and visitor access passes, leveraging face recognition, biometric scanning, and NFC card validation for secure authentication.",
      ],
    },
  ];

  return (
    <section className={styles.experienceSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              bullets={exp.bullets}
              isFirst={index === 0}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const MoreDetailsSection: React.FC = () => {
  return (
    <section className={styles.moreDetailsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>More Details</h2>
        <div className={styles.detailsButtons}>
          <Link to="/experience" className={styles.detailBtn}>
            Experience
          </Link>
          <Link to="/education" className={styles.detailBtn}>
            Education
          </Link>
          <Link to="/projects" className={styles.detailBtn}>
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Adam's personal portfolio website showcasing his projects, skills, and experiences."
    >
      <main>
        <AboutSection />
        <ExperienceSection />
        <MoreDetailsSection />
      </main>
    </Layout>
  );
}
