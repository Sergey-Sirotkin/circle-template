import React from "react"
import Fade from "react-reveal/Fade"
import * as styles from "./featureSection.module.scss"

const FeatureSection = () => {
  return (
    <div className={styles.featureContainer}>
      <Fade bottom cascade>
        <div className={styles.statsRow}>
          <div className={styles.statsCard}>
            <h1 className={styles.statsValue}>2.4M</h1>
            <h3 className={styles.statsDescription}>Days turn around</h3>
          </div>
          <div className={styles.statsCard}>
            <h1 className={styles.statsValue}>7M</h1>
            <h3 className={styles.statsDescription}>Days turn around</h3>
          </div>
          <div className={styles.statsCard}>
            <h1 className={styles.statsValue}>7.4%</h1>
            <h3 className={styles.statsDescription}>Days turn around</h3>
          </div>
          <div className={styles.statsCard}>
            <h1 className={styles.statsValue}>49K</h1>
            <h3 className={styles.statsDescription}>Days turn around</h3>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className={styles.sectionDescription}>
          <h1 className={styles.heading}>
            From rough design files, to <br /> powerful products
          </h1>
          <h2 className={styles.subheading}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
            <br />
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className={styles.infoRow}>
          <div className={styles.infoCardGradient}>
            <h1 className={styles.cardHeading}>Stats</h1>
            <div className={styles.cardDetails}>
              <div>
                <h2 className={styles.cardLabel}>Year Founded</h2>
                <h1 className={styles.cardValue}>2020</h1>
              </div>
              <div>
                <h2 className={styles.cardLabel}>Total Funding</h2>
                <h1 className={styles.cardValue}>$30M</h1>
              </div>
              <div>
                <h2 className={styles.cardLabel}>Team Members</h2>
                <h1 className={styles.cardValue}>120</h1>
              </div>
            </div>
          </div>
          <div className={styles.infoCardDark}>
            <h1 className={styles.cardHeading}>Our Core Behaviours</h1>
            <p className={styles.cardParagraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className={styles.sectionDescription}>
          <h1 className={styles.heading}>Work more easily with everyone</h1>
          <h2 className={styles.subheading}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
            <br />
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className={styles.featuresRow}>
          <div className={styles.featureCardGradient}>
            <h1 className={styles.featureHeading}>
              Built with speed in <br /> mind
            </h1>
            <p className={styles.featureParagraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className={styles.featureCardDark}>
            <h1 className={styles.featureHeading}>
              Work From <br /> anywhere
            </h1>
            <p className={styles.featureParagraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className={styles.featureCardDark}>
            <h1 className={styles.featureHeading}>
              Chat and share in <br /> one tool
            </h1>
            <p className={styles.featureParagraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default FeatureSection
