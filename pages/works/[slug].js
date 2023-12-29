import React from "react"
import { getWork, getWorks } from "sanityStudio/sanity-utils"
import FirstWorkTemplate from "components/templates/WorkTemplates/1"

function Work({ work }) {
    return (
        <FirstWorkTemplate work={work}/>
    )
}

export default Work

export async function getStaticPaths() {
    const works = await getWorks()

    const paths = works.map(work => ({
        params: { slug: work?.slug?.current || "" }
    }))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const work = await getWork(params.slug)

    const images = work[0].images.filter(image => !!image)

    if (!work) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            work: {
                ...work[0],
                images: images || work[0].images
            }
        },
        revalidate: 60
    }
}
