import { getPage, getWorks } from "sanityStudio/sanity-utils"
import WorkCard from "components/molecules/WorkCard"
import styles from "./works.module.css"

export default function Works({ pageContent, works }) {
    return <div className={`contentWrapper ${styles.cardsWrapper}`}>
        {works.map(work => {
            return <WorkCard work={work} />
        })}
    </div>
}

export async function getStaticProps() {
    const pageContent = await getPage("works")
    const works = await getWorks()

    return {
        props: {
            pageContent: pageContent[0],
            works: works.sort((a, b) => a.order - b.order)
        },
        revalidate: 60
    }
}

