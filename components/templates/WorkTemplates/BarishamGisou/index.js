import React from "react"
import { motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import ImageCarousel from "components/atoms/ImageCarousel"
import MotionTextRevealTitle from "components/atoms/MotionTextRevealTitle"
import styles from "../workTemplates.module.css"

function BarishamGisouWorkTemplate({ work, clickPosition, zoomedSize, handleImageClick }) {
    return (
        <div className={`contentWrapper mt-16 ${styles.container}`}>
            <MotionTextRevealTitle
                text={work.projectMainTitle}
                wrapperClass={styles.mainTitle}
            />

            <MotionTextRevealTitle
                text={work.projectSubTitle1}
                wrapperClass={styles.subTitle_label}
            />

            <motion.div
                className={`contentWrapper ${styles.container}`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={styles.divider}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container}`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={styles.description}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.projectMainDescription.length > 0 ? work.projectMainDescription?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} mt-8`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={styles.description}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.projectMainDescription2.length > 0 ? work.projectMainDescription2?.map(item => {
                        return item?.children?.map(child => {
                            return <span className={child.marks[0]}>{child.text}</span>
                        })

                    }) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container}`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={styles.detail}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.projectDetail.length > 0 ? work.projectDetail?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container}`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={styles.disclaimer}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.description1.length > 0 ? work.description1?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container}`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={0}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[0]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} mt-1`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={1}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[1]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`${styles.flexImageWrapper} mt-1`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                <motion.div
                    key={work._id}
                    id={2}
                    className={"w-1/2"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[2]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
                    id={3}
                    className={"w-1/2"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[3]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container}`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={4}
                    className={"mt-1"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[4]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`${styles.flexImageWrapper} mt-1`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                <motion.div
                    key={work._id}
                    id={5}
                    className={"w-1/2"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[5]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
                    id={6}
                    className={"w-1/2"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[6]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} mt-1`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={7}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[7]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`${styles.flexImageWrapper} mt-1`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                <motion.div
                    key={work._id}
                    id={8}
                    className={"w-1/2"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[8]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
                    id={9}
                    className={"w-1/2"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[9]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} mt-1`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={10}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[10]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`${styles.flexImageWrapper} mt-1`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                <motion.div
                    key={work._id}
                    id={11}
                    className={"w-1/3"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[11]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
                    id={12}
                    className={"w-1/3"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[12]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
                    id={13}
                    className={"w-1/3"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[13]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container}`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={styles.title}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.title2.length > 0 ? work.title2?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container}`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={styles.description}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.description2.length > 0 ? work.description2?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} mt-20 mb-6`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={"text-base text-center leading-loose"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.title3.length > 0 ? work.title3?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`${styles.flexImageWrapper} mt-1`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                <motion.div
                    key={work._id}
                    id={14}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[14]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
                    id={15}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[15]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
                    id={16}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[16]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
                    id={17}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[17]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} mt-20 mb-6`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={"text-base text-center leading-loose"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.description3.length > 0 ? work.description3?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`${styles.flexImageWrapper}`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                <motion.div
                    key={work._id}
                    id={18}
                    className={"w-2/5"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[18]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
                    id={19}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[19]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
                    id={20}
                    className={"w-2/5"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[20]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} mt-10 mb-6`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={"text-base text-center leading-loose"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.title4.length > 0 ? work.title4?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`${styles.flexImageWrapper}`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                <motion.div
                    key={work._id}
                    id={21}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[21]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
                    id={22}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[22]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} mt-10 mb-6`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={"text-base text-center leading-loose"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.description4.length > 0 ? work.description4?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </motion.div>
            </motion.div>

            <iframe
                src="https://player.vimeo.com/video/899275656?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="600" height="600" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
                title="Gisou Barisham Clo process"></iframe>

            <motion.div
                className={`contentWrapper ${styles.container} mt-10 mb-6`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={"text-base text-center leading-loose"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.title5.length > 0 ? work.title5?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`${styles.flexImageWrapper}`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                <motion.div
                    key={work._id}
                    id={23}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[23]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
                    id={24}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[24]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`${styles.flexImageWrapper} mt-1`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                <motion.div
                    key={work._id}
                    id={25}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[25]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
                    id={26}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <ImageCarousel
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        clickPosition={clickPosition}
                        zoomedSize={zoomedSize}
                        zoomed={false}
                        images={[work.images[26]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default BarishamGisouWorkTemplate
