import React from "react"
import Input from "../../Atoms/input"
import Button from "../../Atoms/button"
import Fade from "react-reveal/Fade"
import * as styles from "./header.module.scss"

// Assets
import HeaderImage from "../../../images/header-main.jpg"

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Fade>
        <div>
          <h2 className={styles.subheading}>
            We deliver premium creative solution
          </h2>
          <h1 className={styles.mainHeading}>
            Change starts with <br />a{" "}
            <span className={styles.gradientText}>single click.</span>
          </h1>
        </div>
      </Fade>
      <Fade bottom>
        <div className={styles.actionContainer}>
          <Input
            onChange={e => console.log(e.target.value)}
            placeholder="email."
          />
          <Button
            colorClass={styles.buttonGradient}
            title="Request Access"
            textColor={styles.buttonText}
            marginClass={styles.buttonMargin}
            onClick={() => console.log("Request Access")}
          />
        </div>
      </Fade>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img className={styles.headerImage} src={HeaderImage} alt="Header" />
        </div>
      </div>
    </div>
  )
}

export default Header
