import Link from "next/link"
import LogoSvg from "svgIcons/logo.svg"
import styles from "./header.module.css"

export default function Header() {
  return <header className={styles.container}>
    <ul className={styles.menuContainer}>
      <li className={styles.menuItem}>
        <Link href="#">Works</Link>
      </li>
      <li className={styles.menuItem}>
        <Link href="#">Research</Link>
      </li>
    </ul>

    <Link href={"/"}>
      <LogoSvg className={styles.logoSvg} width={100}/>
    </Link>

    <ul className={styles.menuContainer}>
      <li className={styles.menuItem}>
        <Link href="#">About</Link>
      </li>
      <li className={styles.menuItem}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </header>
}
