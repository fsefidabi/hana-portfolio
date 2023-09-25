import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { getCommonContent, getPage } from "sanityStudio/sanity-utils"
import { fade } from "framerMotionAnimations"
import ArrowSvg from "svgIcons/arrow.svg"
import PageSection from "components/organisms/PageSection"
import MotionTextRevealTitle from "components/atoms/MotionTextRevealTitle"

const DynamicPdfViewer = dynamic(() => import("components/molecules/PdfViewer"), {
    ssr: false
})

export default function Research({ pageContent, commonContent }) {
    function handleOpenThesisPdf() {
        window.open(pageContent.file1)
    }

    const moreButtonLabel = <div className={"readMoreButton"}>
        <span>{commonContent?.readFullText}</span>
        <ArrowSvg/>
    </div>

    return <div className={"flexColContainer"}>
        <PageSection
            id={"research_description"}
            pageTitle={pageContent?.pageTitle}
            title={pageContent?.title1}
            description={pageContent?.description1}
            hasMoreButton={true}
            moreButtonLabel={moreButtonLabel}
            moreButtonHoverImage={pageContent?.image1}
            handleMoreButtonClick={handleOpenThesisPdf}
        />

        <div id={"research_summary"} className={"borderTop overflow-x-hidden"}>
            <div className={"contentWrapper"}>
                <div className={"content borderRight title w-1/3"} style={{ border: "none" }}>
                    <div className={"flex items-end gap-2"}>
                        <MotionTextRevealTitle
                            text={pageContent?.fileTitle1}
                            wrapperClass={"relative"}
                            showArrowSvg={true}
                        />
                    </div>

                </div>
                <div className={"content borderRight"} style={{ border: "none" }}></div>
                <div className={"md:w-1/6"}></div>
            </div>

            <motion.div
                id={"research_pdf_viewer_container"}
                className={"content borderRight"}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: false, margin: "-100px" }}
                variants={fade.fadeInUp}
            >
                <DynamicPdfViewer filePath={pageContent?.file2}/>
            </motion.div>
        </div>
    </div>
}

export async function getStaticProps() {
    const pageContent = await getPage("research")
    const commonContent = await getCommonContent()

    return {
        props: {
            pageContent: pageContent[0],
            commonContent: commonContent[0]
        },
        revalidate: 60
    }
}
