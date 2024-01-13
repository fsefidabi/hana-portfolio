import React from "react"
import { motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import ImageCarousel from "components/atoms/ImageCarousel"
import MotionTextRevealTitle from "components/atoms/MotionTextRevealTitle"
import styles from "../workTemplates.module.css"

function OakleyWorkTemplate({ work, clickPosition, zoomedSize, handleImageClick }) {
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

            <MotionTextRevealTitle
                text={work.projectSubTitle2}
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
                    {work.description3.length > 0 ? work.description3?.map(item => (
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
                    id={37}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <img src={work.images[36]} alt="logo"/>
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
                className={`contentWrapper ${styles.container} my-10`}
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

                <motion.div
                    key={work._id}
                    id={12}
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
                className={`contentWrapper ${styles.container} mt-1`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={13}
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

                <motion.div
                    key={work._id}
                    id={18}
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
                        images={work.images.slice(19, 25)}
                        hasThumbnail={true}
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

                <motion.div
                    key={work._id}
                    id={27}
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
                        images={[work.images[27]]}
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
                    id={28}
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
                        images={work.images.slice(28, 34)}
                        hasThumbnail={true}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} my-10`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={34}
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
                        images={[work.images[34]]}
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
                    id={35}
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
                        images={[work.images[35]]}
                        onClick={handleImageClick}
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default OakleyWorkTemplate
