import Link from "next/link"
import LogoSvg from "svgIcons/logo.svg"
import styles from "./header.module.css"

export default function MobileHeader() {
  return <header className={styles.container}>
    <div className={styles.mobileLogoWrapper}>
      <Link href={"/"}>
        <LogoSvg className={`${styles.logoSvg} ${styles.mobileLogoSvg}`} width={100}/>
      </Link>
    </div>

    <ul className={`${styles.menuContainer} ${styles.mobileMenuContainer}`}>
      <li className={styles.menuItem}>
        <Link href="#">Works</Link>
      </li>
      <li className={styles.menuItem}>
        <Link href="/research">Research</Link>
      </li>
      <li className={styles.menuItem}>
        <Link href="#">About</Link>
      </li>
      <li className={styles.menuItem}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </header>
}
