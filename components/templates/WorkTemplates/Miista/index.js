import React from "react"
import { motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import ImageCarousel from "components/atoms/ImageCarousel"
import MotionTextRevealTitle from "components/atoms/MotionTextRevealTitle"
import styles from "../workTemplates.module.css"

function MiistaWorkTemplate({ work, clickPosition, zoomedSize, handleImageClick }) {
    return (
        <div className={`contentWrapper mt-16 ${styles.container}`}>
            <MotionTextRevealTitle
                text={work.projectMainTitle}
                wrapperClass={styles.mainTitle}
            />

            <MotionTextRevealTitle
                text={work.projectSubTitle}
                wrapperClass={styles.subTitle}
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
                    [
                    {work.projectDetail.length > 0 ? work.projectDetail?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                    ]
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
                    [
                    <div className={"flex mr-2 font-semibold"}>
                        {work.title2.length > 0 ? work.title2?.map(item => (
                            item?.children?.map(child => (
                                <p>{child.text}</p>
                            ))
                        )) : null}
                        <p>:</p>
                    </div>
                    {work.description2.length > 0 ? work.description2?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                    ]
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
                className={`${styles.flexImageWrapper} mt-1`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                <motion.div
                    key={work._id}
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
                        images={[work.images[1]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
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
                        images={[work.images[3]]}
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
                        images={[work.images[4]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
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

                <motion.div
                    key={work._id}
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
                        images={[work.images[7]]}
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
                    {work.title1.length > 0 ? work.title1?.map(item => (
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
                    className={styles.singleImageWrapper}
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
            </motion.div>

            <motion.div
                className={`${styles.flexImageWrapper} my-10`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                <motion.div
                    key={work._id}
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

                <motion.div
                    key={work._id}
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
                        images={[work.images[10]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
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
                        images={[work.images[11]]}
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
                        images={[work.images[12]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
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
                        images={[work.images[13]]}
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
                        images={[work.images[14]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
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
                        images={[work.images[15]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`${styles.flexImageWrapper} my-10`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.2)}
            >
                <motion.div
                    key={work._id}
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
                        images={[work.images[16]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
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
                        images={[work.images[17]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
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
                        images={[work.images[18]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
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
                        images={[work.images[19]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
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
                        images={[work.images[20]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
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
                        images={[work.images[20]]}
                        onClick={handleImageClick}
                    />
                </motion.div>

                <motion.div
                    key={work._id}
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
                        images={[work.images[21]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default MiistaWorkTemplate
