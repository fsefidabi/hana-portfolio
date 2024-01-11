import React from "react"
import { motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import ImageCarousel from "components/atoms/ImageCarousel"
import MotionTextRevealTitle from "components/atoms/MotionTextRevealTitle"
import styles from "../workTemplates.module.css"

function ClaudeMontanaWorkTemplate({ work, clickPosition, zoomedSize, handleImageClick }) {
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
                    {work.projectMainDescription.length > 0 ? work.projectMainDescription?.map((item, index) => (
                        item?.children?.map(child => (
                            <p className={index === 1 ? "underline" : ""}>{child.text}</p>
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
                className={"w-screen h-1 border-t-[0.5px] border-white"}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} my-6`}
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
                    {work.title2.length > 0 ? work.title2[0]?.children?.map((child, index) => (
                        <p
                            key={index}
                            className={"whitespace-nowrap font-semibold"}
                        >
                            {child.text}
                        </p>
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
                className={`contentWrapper ${styles.container} my-6`}
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
                    {work.title2.length > 0 ? work.title2[1]?.children?.map((child, index) => (
                        <p
                            key={index}
                            className={"whitespace-nowrap font-semibold"}
                        >
                            {child.text}
                        </p>
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} border-t-[1px] border-gray-600`}
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
                className={`contentWrapper ${styles.container} border-t-[1px] border-gray-600`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={3}
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
                className={`contentWrapper ${styles.container} my-6`}
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
                    {work.title2.length > 0 ? work.title2[2]?.children?.map((child, index) => (
                        <p
                            key={index}
                            className={"whitespace-nowrap font-semibold"}
                        >
                            {child.text}
                        </p>
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} border-t-[1px] border-gray-600`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={4}
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
                className={`contentWrapper ${styles.container} mt-1`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={5}
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
                className={`contentWrapper ${styles.container} my-6`}
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
                    {work.title2.length > 0 ? work.title2[3]?.children?.map((child, index) => (
                        <p
                            key={index}
                            className={"whitespace-nowrap font-semibold"}
                        >
                            {child.text}
                        </p>
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} border-t-[1px] border-gray-600`}
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
                className={`contentWrapper ${styles.container} border-t-[1px] border-gray-600`}
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
                className={`contentWrapper ${styles.container} my-6`}
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
                    {work.title2.length > 0 ? work.title2[4]?.children?.map((child, index) => (
                        <p
                            key={index}
                            className={"whitespace-nowrap font-semibold"}
                        >
                            {child.text}
                        </p>
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
                className={`contentWrapper ${styles.container}`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
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
                className={`contentWrapper ${styles.container}`}
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
                className={`contentWrapper ${styles.container}`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={11}
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
                className={`contentWrapper ${styles.container} border-t-[1px] border-black`}
                initial={"initial"}
                whileInView="animate"
                viewport={{ once: true }}
                variants={textReveal.parentVariantsWithStaggerChildren(1)}
            >
                <motion.div
                    key={work._id}
                    id={12}
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
                className={`contentWrapper ${styles.container} mt-16`}
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
                    {work.title2.length > 0 ? work.title2[5]?.children?.map((child, index) => (
                        <p key={index}>
                            {child.text}
                        </p>
                    )) : null}
                </motion.div>
            </motion.div>

            <motion.div
                className={`contentWrapper ${styles.container} mb-10`}
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
                    {work.title2.length > 0 ? work.title2[6]?.children?.map((child, index) => (
                        <p key={index}>
                            {child.text}
                        </p>
                    )) : null}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ClaudeMontanaWorkTemplate
