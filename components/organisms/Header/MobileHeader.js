import Link from "next/link"
import LogoSvg from "svgIcons/logo.svg"
import { MENUS } from "constants"
import styles from "./header.module.css"

export default function MobileHeader() {
  return <header className={styles.container}>
    <div className={styles.mobileLogoWrapper}>
      <Link href={"/"}>
        <LogoSvg className={`${styles.logoSvg} ${styles.mobileLogoSvg}`} width={100}/>
      </Link>
    </div>

    <ul className={`${styles.menuContainer} ${styles.mobileMenuContainer}`}>
      {MENUS.map(menuItem => (
          <li
              key={menuItem.path}
              className={styles.menuItem}
          >
            <Link href={menuItem.path} prefetch>{menuItem.label}</Link>
          </li>
      ))}
    </ul>
  </header>
}
