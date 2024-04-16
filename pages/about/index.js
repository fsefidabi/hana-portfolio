import { motion } from "framer-motion"
import { getPage, getJourneyMilestones } from "sanityStudio/sanity-utils"
import { fade } from "framerMotionAnimations"
import JourneySection from "components/organisms/JourneySection"
import PageSection from "components/organisms/PageSection"
import Skills3DSphere from "components/molecules/Skills3DSphere"
import MotionTextRevealTitle from "components/atoms/MotionTextRevealTitle"
import styles from "./about.module.css"

export default function About({ pageContent, journeyMilestones }) {
    return <div className={"flexColContainer"}>
        <PageSection
            id={"about_description"}
            pageTitle={pageContent?.pageTitle}
            title={pageContent?.title1}
            description={pageContent?.description1}
            image={pageContent?.image1}
            customTitleStyle={"text-tertiary"}
        />

        <section id={"about_skills"} className={"borderTop"}>
            <div className={"contentWrapper"}>
                <div className={"content borderRight title w-3/5"} style={{ border: "none" }}>
                    <div className={`flex items-end gap-2 ${styles.skillsDescription}`}>
                        <MotionTextRevealTitle
                            text={pageContent?.title2}
                            wrapperClass={"inline"}
                            showArrowSvg={true}
                        />
                    </div>
                </div>
                <div className={"content borderRight"} style={{ border: "none" }}></div>
                <div className={"md:w-1/6"}></div>
            </div>

            <motion.div
                initial={"initial"}
                whileInView={"animate"}
                viewport={{ once: false, margin: "-100px" }}
                variants={fade.fadeInUp()}
            >
                <div className={styles.generalizedSkills}>
                    <p>Footwear /// Accessories /// Apparel</p>
                    <p>URL /// IRL</p>
                </div>

                <div
                    id={"about_skills_3d"}
                    className={"contentWrapper overflow-x-hidden"}
                >
                    <Skills3DSphere/>
                </div>
            </motion.div>
        </section>

        {/*<JourneySection*/}
        {/*    id={"about_journey"}*/}
        {/*    title={pageContent?.title3}*/}
        {/*    description={pageContent?.description3}*/}
        {/*    journeyMilestones={journeyMilestones}*/}
        {/*/>*/}
    </div>
}

export async function getStaticProps() {
    const pageContent = await getPage("about")
    const journeyMilestones = await getJourneyMilestones()

    return {
        props: {
            pageContent: pageContent[0],
            journeyMilestones: journeyMilestones.sort((a, b) => a.order - b.order)
        },
        revalidate: 60
    }
}
