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
            <div className={"w-5/12 flex items-center justify-between"}>
                <ul className={styles.menuContainer}>
                    {MENUS.slice(0, 3).map(({ label, path }) => {
                        return <MenuItem key={label} label={label} path={path}/>
                    })}
                </ul>
            </div>

            <div className={"w-2/12 flex justify-center"}>
                <Link href={"/"} className={"__link"}>
                    <LogoSvg className={styles.logoSvg} width={100}/>
                </Link>
            </div>

            <div className={"w-5/12 flex justify-end"}>
                <ul className={styles.menuContainer}>
                    {MENUS.slice(3).map(({ label, path }) => {
                        return <MenuItem key={label} label={label} path={path}/>
                    })}
                </ul>
            </div>
        </header>
}
