import { useMediaQuery } from "hooks/useMediaQuery"
import commonContent from "constants/data/common/index.json"
import LinkedInSvg from "svgIcons/linkedin.svg"
import BehanceSvg from "svgIcons/behance.svg"
import InstagramSvg from "svgIcons/instagram.svg"
import EmailSvg from "svgIcons/email.svg"
import MobileFooter from "./MobileFooter"
import styles from "./footer.module.css"

export default function Footer() {
  const matches = useMediaQuery("(max-width: 640px)")

  return matches ? <MobileFooter email={commonContent.email}/> :
    <footer className={styles.footer}>
      <div className={styles.contactSection}>
        <div className={styles.socialMediaSection}>
        <span className={"__link"} onClick={() => window.open(`mailto:${commonContent.email}`)}>
          <EmailSvg className={styles.contactIcon}/>
        </span>
          <a href={"https://www.instagram.com/hananehsefidabi/"} target={"_blank"} className={"__link"}>
            <InstagramSvg className={styles.contactIcon}/>
          </a>
          <a href={"https://www.behance.net/hananehsefidabi"} target={"_blank"} className={"__link"} style={{ paddingTop: "1px" }}>
            <BehanceSvg className={styles.contactIcon}/>
          </a>
          <a href={"https://www.linkedin.com/in/hananehsefidabi/"} className={"__link"} target={"_blank"}
             style={{ transform: "scale(0.8)", marginLeft: "-5px" }}>
            <LinkedInSvg className={styles.contactIcon}/>
          </a>
        </div>

        <div className={styles.copyrightSection}>
          <p>© 2024 Hananeh Sefidabi</p>
        </div>
      </div>
      <div className={`${styles.developerText} w-full`}>
        <p>Developed by Farzaneh Sefidabi</p>
      </div>
    </footer>
}
