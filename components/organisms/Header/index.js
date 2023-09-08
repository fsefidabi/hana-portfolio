import Link from "next/link"
import LogoSvg from "svgIcons/logo.svg"
import { useMediaQuery } from "hooks/useMediaQuery"
import MobileHeader from "./MobileHeader"
import styles from "./header.module.css"

export default function Header() {
  const matches = useMediaQuery("(max-width: 640px)")

  return matches ? <MobileHeader/> :
    <header className={styles.container}>
      <ul className={styles.menuContainer}>
        <li className={styles.menuItem}>
          <Link href="/">Works</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/research">Research</Link>
        </li>
      </ul>

      <Link href={"/"}>
        <LogoSvg className={styles.logoSvg} width={100}/>
      </Link>

      <ul className={styles.menuContainer}>
        <li className={styles.menuItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
}
