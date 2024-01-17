import React from "react"
import { getPage } from "sanityStudio/sanity-utils"
import ArrowSvg from "svgIcons/arrowWithTail1.svg"
import VideoPlayer from "components/atoms/VideoPlayer"
import Button from "components/atoms/Button"
import styles from "../styles/Home.module.css"
import { useRouter } from "next/router"

const portfolioButtonLabel = <div className={"readMoreButtonDark"}>
    <span>PORTFOLIO</span>
    <ArrowSvg/>
</div>

export default function Home({ pageContent }) {
    const router = useRouter()

    function handleOpenPortfolio() {
        router.push("/works")
    }

    return (
        <div className={styles.main}>
            <div className={"flex flex-col lg:flex-row items-center border-y-[1px] border-white"}>
                <div className={"w-2/3 lg:w-7/12"}>
                    <VideoPlayer src={pageContent.file2} />
                </div>

                <div className={"flex flex-col gap-6 w-2/3 my-10 lg:my-0 lg:w-5/12 mx-10 xl:mx-20 text-center text-xl font-NuetralFace tracking-[0.07em]"}>
                    <div className={"w-full"}>
                        {pageContent.title1.length > 0 ? pageContent.title1?.map(item => {
                            return item?.children?.map(child => {
                                return <span className={child.marks[0] === "strong" ? "font-bold": "font-normal"}>{child.text}</span>
                            })
                        }) : null}
                    </div>

                    <div className={"w-full"}>
                        {pageContent.description1.length > 0 ? pageContent.description1?.map(item => {
                            return item?.children?.map(child => {
                                return <span className={child.marks[0] === "strong" ? "font-bold": "font-normal"}>{child.text}</span>
                            })
                        }) : null}
                    </div>

                    <div className={"w-96 mx-auto flex justify-center md:text-base lg:text-lg"}>
                        <Button
                            label={portfolioButtonLabel}
                            theme={"dark"}
                            handleOnClick={handleOpenPortfolio}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const pageContent = await getPage("/")

    return {
        props: {
            pageContent: pageContent[0]
        },
        revalidate: 60
    }
}

