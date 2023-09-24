import { useId } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { fade } from "framerMotionAnimations"
import Button from "components/atoms/Button"
import Tooltip from "components/atoms/Tooltip"
import MotionTextRevealTitle from "components/atoms/MotionTextRevealTitle"

export default function PageSection(props) {
    const {
        id = useId(),
        pageTitle,
        title,
        description,
        image,
        hasMoreButton,
        moreButtonLabel,
        moreButtonHoverImage,
        customTitleStyle,
        handleMoreButtonClick
    } = props

    function screenshotImageTooltip() {
        return moreButtonHoverImage && <div className={"w-[14rem] h-[20rem]"}>
            <Image
                src={moreButtonHoverImage}
                alt={"screenshot"}
                layout="fill"
                className={"w-full transition duration-600"}
            />
        </div>
    }

    return <motion.section id={id} className={"borderTop"}>
        <div className={"contentWrapper"}>
            <motion.div
                className={"content borderRight title w-1/3"}
                variants={fade.fadeIn}
                initial={"initial"}
                animate={"animate"}
            >
                <span className={"hoverable-title"}>{pageTitle}</span>
            </motion.div>

            <div className={"content borderRight w-2/3"}>
                <div className={"flex flex-col xs:flex-row gap-4 mb-10"}>
                    {image && <div className={"relative shrink-0 overflow-hidden"}>
                        <Image
                            src={image}
                            alt={"Hana photo"}
                            width={200}
                            height={277}
                            className={"w-[200px] h-[277px]"}
                        />
                    </div>}
                    <MotionTextRevealTitle
                        text={title}
                        wrapperClass={"title"}
                        elementClass={customTitleStyle}
                    />
                </div>

                <motion.div
                    variants={fade.fadeInUp}
                    initial={"initial"}
                    animate={"animate"}
                >
                    <div className={"description"}>
                        {description?.map(item => {
                            return item?.children?.map(child => {
                                return <p key={child._key}>{child.text}</p>
                            })
                        })}
                    </div>

                    <div className={"relative w-fit mt-10 mb-6"}>
                        {hasMoreButton && <Tooltip
                            content={screenshotImageTooltip()}
                            placement={"top"}
                            animation={"fade_preview"}
                            followCursorProp={true}
                        >
                            <div className={"relative"}>
                                <Button
                                    label={moreButtonLabel}
                                    handleOnClick={handleMoreButtonClick}
                                />
                            </div>
                        </Tooltip>}
                    </div>
                </motion.div>
            </div>
            <div className={"md:w-1/6"} style={{ minWidth: "30px" }}></div>
        </div>
    </motion.section>
}
