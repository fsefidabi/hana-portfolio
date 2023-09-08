import Link from "next/link"
import { useRouter } from "next/router"
import LogoSvg from "svgIcons/logo.svg"
import { useMediaQuery } from "hooks/useMediaQuery"
import MobileHeader from "./MobileHeader"
import styles from "./header.module.css"

export default function Header() {
  const matches = useMediaQuery("(max-width: 640px)")
  const router = useRouter()
  const currentRoute = router.pathname

  return matches ? <MobileHeader/> :
    <header className={styles.container}>
      <ul className={styles.menuContainer}>
        <li className={styles.menuItem}>
          <Link href="/" className={currentRoute === "/" ? "border-b-2 border-secondary" : ""}>Works</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/research" className={currentRoute === "/research" ? "border-b-2 border-secondary" : ""}>Research</Link>
        </li>
      </ul>

      <Link href={"/"}>
        <LogoSvg className={styles.logoSvg} width={100}/>
      </Link>

      <ul className={styles.menuContainer}>
        <li className={styles.menuItem}>
          <Link href="/about" className={currentRoute === "/about" ? "border-b-2 border-secondary" : ""}>About</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact" className={currentRoute === "/contact" ? "border-b-2 border-secondary" : ""}>Contact</Link>
        </li>
      </ul>
    </header>
}
