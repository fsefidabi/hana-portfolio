import { getWorks } from "sanityStudio/sanity-utils"
import WorkCard from "components/molecules/WorkCard"
import styles from "./works.module.css"

export default function Works({ works }) {
    return <>
        <div className={"contentWrapper"}>
            <div className={`${styles.cardsWrapper} borderRight borderLeft`}>
                {works.map(work => {
                    return <WorkCard work={work}/>
                })}
            </div>
        </div>
    </>
}

export async function getStaticProps() {
    const works = await getWorks()

    return {
        props: {
            works: works.sort((a, b) => a.order - b.order)
        },
        revalidate: 60
    }
}

