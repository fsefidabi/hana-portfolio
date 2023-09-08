import { useEffect, useState } from "react"
import { useMediaQuery } from "hooks/useMediaQuery"
import { getCommonContent } from "sanityStudio/sanity-utils"
import LinkedInSvg from "svgIcons/linkedin.svg"
import BehanceSvg from "svgIcons/behance.svg"
import InstagramSvg from "svgIcons/instagram.svg"
import EmailSvg from "svgIcons/email.svg"
import MobileFooter from "./MobileFooter"
import styles from "./footer.module.css"

export default function Footer() {
  const matches = useMediaQuery("(max-width: 640px)")
  const [email, setEmail] = useState("")

  useEffect(() => {
    getCommonContent().then(res => {
      setEmail(res[0].email)
    })
  }, [])

  return matches ? <MobileFooter email={email}/> :
    <footer className={styles.footer}>
      <div className={styles.contactSection}>
        <div className={styles.socialMediaSection}>
        <span onClick={() => window.open(`mailto:${email}`)}>
          <EmailSvg className={styles.contactIcon}/>
        </span>
          <a href={"https://www.instagram.com/hananehsefidabi/"} target={"_blank"}>
            <InstagramSvg className={styles.contactIcon}/>
          </a>
          <a href={"https://www.behance.net/hananehsefidabi"} target={"_blank"} style={{ paddingTop: "1px" }}>
            <BehanceSvg className={styles.contactIcon}/>
          </a>
          <a href={"https://www.linkedin.com/in/hananehsefidabi/"} target={"_blank"}
             style={{ transform: "scale(0.8)", marginLeft: "-5px" }}>
            <LinkedInSvg className={styles.contactIcon}/>
          </a>
        </div>

        <div className={styles.copyrightSection}>
          <p>© 2023 Hananeh Sefidabi</p>
        </div>
      </div>
      <div className={`${styles.developerText} w-full`}>
        <p>Developed by Farzaneh Sefidabi</p>
      </div>
    </footer>
}
