import Link from "next/link"
import { useMediaQuery } from "hooks/useMediaQuery"
import { MENUS } from "constants"
import LogoSvg from "svgIcons/logo.svg"
import MenuItem from "./MenuItem"
import MobileHeader from "./MobileHeader"
import styles from "./header.module.css"

export default function Header() {
  const matches = useMediaQuery("(max-width: 640px)")

  return matches ? <MobileHeader/> :
    <header className={styles.container}>
      <ul className={styles.menuContainer}>
        {MENUS.slice(0, 2).map(({ label, path }) => {
          return <MenuItem key={label} label={label} path={path} />
        })}
      </ul>

      <Link href={"/"}>
        <LogoSvg className={styles.logoSvg} width={100}/>
      </Link>

      <ul className={styles.menuContainer}>
        {MENUS.slice(2).map(({ label, path }) => {
          return <MenuItem key={label} label={label} path={path} />
        })}
      </ul>
    </header>
}
