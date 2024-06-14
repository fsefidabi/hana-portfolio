import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import ImageCarousel from "components/atoms/ImageCarousel"
import MotionTextRevealTitle from "components/atoms/MotionTextRevealTitle"
import styles from "../workTemplates.module.css"

function SpinWorkTemplate({ work, clickPosition, zoomedSize, handleImageClick }) {
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
                    {work.projectMainDescription.length > 0 ? work.projectMainDescription?.map((item, index) => (
                        item?.children?.map(child => (
                            <span className={child.marks.length > 0 ? "font-medium" : ""}>{child.text}</span>
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
                className={`${styles.flexImageWrapper} mt-1`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                <iframe
                    src="https://drive.google.com/file/d/1c8Ye3jLNAyDQM88lXepdi6fB7CrH6nGp/preview?autoplay=1"
                    width="380"
                    height="680"
                    allow="autoplay; fullscreen; picture-in-picture"
                >
                </iframe>

                <motion.div
                    className={`contentWrapper ${styles.container}`}
                    style={{ width: "68%" }}
                    initial={"initial"}
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={textReveal.parentVariantsWithStaggerChildren(1)}
                >
                    <motion.div
                        key={work._id}
                        className={styles.link}
                        style={{ width: "70%" }}
                        variants={textReveal.boxRevealToTop()}
                        transition={{ duration: 2 }}
                    >
                        {work.description2.length > 0 ? work.description2?.map(item => (
                            item?.children?.map(child => (
                                <p>{child.text}</p>
                            ))
                        )) : null}
                    </motion.div>

                    <motion.div
                        className={`${styles.flexImageWrapper} mt-20`}
                        initial={"initial"}
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
                    >
                        <motion.div
                            key={work._id}
                            id={1}
                            className={"w-7/12"}
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
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} mt-20`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={styles.description}
                    style={{ width: "70%" }}
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
                className={`contentWrapper ${styles.container} mt-20`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={2}
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
                className={`${styles.flexImageWrapper} mt-2`}
                style={{ gap: "8px" }}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
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
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} mt-2`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={6}
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
                className={`contentWrapper ${styles.container} my-20`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={styles.description}
                    style={{ width: "70%" }}
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

            <motion.div
                className={`contentWrapper ${styles.container}`}
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
                className={`contentWrapper ${styles.container} mt-2`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={8}
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
                className={`contentWrapper ${styles.container} mt-10`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={styles.description}
                    style={{ width: "70%" }}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.description5.length > 0 ? work.description5?.map(item => (
                        item?.children?.map(child => (
                            <p>{child.text}</p>
                        ))
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`${styles.flexImageWrapper} mt-10`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                <motion.div
                    key={work._id}
                    id={9}
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
                className={`${styles.flexImageWrapper} mt-2`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(0.5)}
            >
                <motion.div
                    key={work._id}
                    id={10}
                    className={"w-1/3 mr-1"}
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
                    id={12}
                    className={"w-2/3"}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    <iframe
                        src="https://drive.google.com/file/d/1OZRlKjkwr8CJAoONEZtxEYeVMd5kTelb/preview?autoplay=1"
                        width="100%"
                        height="503"
                        allow="autoplay">
                    </iframe>
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} mt-20`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={`${styles.mainTitle} __link`}
                    style={{ width: "70%" }}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.title1.length > 0 ? work.title1?.map(item => (
                        item?.children?.map(child => (
                            <Link
                                href={work.links.article}
                                target={"_blank"}
                            >
                                {child.text}
                            </Link>
                        ))
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} mt-10`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={`${styles.mainTitle} __link`}
                    style={{ width: "70%" }}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.title2.length > 0 ? work.title2?.map(item => (
                        item?.children?.map(child => (
                            <Link
                                href={work.links.spin}
                                target={"_blank"}
                            >
                                {child.text}
                            </Link>
                        ))
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} mt-20`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    className={styles.description}
                    style={{ width: "70%" }}
                    variants={textReveal.boxRevealToTop()}
                    transition={{ duration: 2 }}
                >
                    {work.projectMainDescription2.length > 0 ? work.projectMainDescription2?.map(item => (
                        item?.children?.map((child, index) => (
                            <p className={index === 0 ? "mb-5" : ""}>{child.text}</p>
                        ))
                    )) : null}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default SpinWorkTemplate
