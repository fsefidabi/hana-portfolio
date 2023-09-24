import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { fade } from "framerMotionAnimations"
import JourneyCard from "components/molecules/JourneyCard"
import MotionTextRevealTitle from "components/atoms/MotionTextRevealTitle"

const DynamicCarousel = dynamic(() => import("components/atoms/Carousel"), {
    ssr: false
})

export default function JourneySection({ id, title, description, journeyMilestones }) {
    const carouselHeader = <div
        className={`content borderRight contentWrapper w-full flex items-center justify-between`}
        style={{ border: "none" }}
    >
        <MotionTextRevealTitle
            text={title}
            wrapperClass={"title"}
        />

        {description?.length > 0 ? <
            motion.div
            className={"text-base"}
            initial={"initial"}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px 0px 0px -100px" }}
            variants={fade.fadeInRight}
        >
            {description?.map(item => {
                return item?.children?.map(child => {
                    return <p key={child._key}>{child.text}</p>
                })
            })}
        </motion.div> : null}
    </div>

    return <DynamicCarousel id={id} header={carouselHeader}>
        <motion.div
            className={"flex gap-10 items-center"}
            style={{ height: "calc(100vh - 88px)" }}
            initial={"initial"}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            variants={fade.fadeInUp}
        >
            <div
                className={"content borderRight flex items-center justify-between"}
                style={{ border: "none", paddingRight: 0, paddingLeft: 0 }}>
                <div className={"dashedBorder"}></div>
            </div>

            {journeyMilestones?.map(item => {
                return <JourneyCard
                    key={item?._id}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    image={item.image1}
                />
            })}
        </motion.div>
    </DynamicCarousel>
}
