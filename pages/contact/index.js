import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useCopyToClipboard } from "hooks/useCopyToClipboard"
import { getCommonContent, getPage } from "sanityStudio/sanity-utils"
import ArrowSvg from "svgIcons/arrow.svg"
import { fade } from "framerMotionAnimations"
import Input from "components/atoms/Input"
import Textarea from "components/atoms/Textarea"
import Button from "components/atoms/Button"
import Tooltip from "components/atoms/Tooltip"
import { Toast } from "components/atoms/Toast"
import MotionTextRevealTitle from "components/atoms/MotionTextRevealTitle"
import styles from "./Contact.module.css"

const INITIAL_CONTACT_FORM_FIELDS = {
    name: "",
    email: "",
    message: ""
}

export default function Contact({ pageContent, commonContent }) {
    const [contactFormFields, setContactFormFields] = useState(INITIAL_CONTACT_FORM_FIELDS)
    const [emailCopiedToClipboard, setEmailCopiedToClipboard] = useState(false)
    const [loading, setLoading] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState("")

    const [copiedText, copy] = useCopyToClipboard()

    useEffect(() => {
        if (!showToast) {
            setToastMessage("")
        }
    }, [showToast])

    function handleFormFieldChange(e) {
        setContactFormFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    async function handleFormSubmission(e) {
        e.preventDefault()
        await sendEmail(contactFormFields)
    }

    async function sendEmail(emailData) {
        try {
            if (loading) return
            setLoading(true)
            const response = await fetch(`/api/send-email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(emailData)
            })

            if (response.ok) {
                console.log("Email sent successfully!")
                setContactFormFields(INITIAL_CONTACT_FORM_FIELDS)
                setLoading(false)
                setShowToast(true)
                setToastMessage("Your Message Is On It's Way!")
            } else {
                console.error("Error sending email.")
                setLoading(false)
                setShowToast(true)
                setToastMessage("Oops! There Was A Problem... Please Resend")
            }
        } catch (error) {
            console.error("An error occurred while sending the email.", error)
            setLoading(false)
            setShowToast(true)
            setToastMessage("Oops! There Was A Problem... Please Resend")
        }
    }

    async function handleCopyEmailToClipboard(email) {
        try {
            await copy(email)
            setEmailCopiedToClipboard(true)
        } catch (err) {
            console.log(`Error happened in copying email. Error: ${err}`)
            setEmailCopiedToClipboard(false)
        }
    }

    function handleEmailLinkMouseLeave() {
        setTimeout(() => {
            setEmailCopiedToClipboard(false)
        }, 100)
    }

    function handleToastClose() {
        setShowToast(false)
        setToastMessage("")
    }

    function copyToClipboardTooltip() {
        return <div
            className={`${emailCopiedToClipboard ? "bg-tertiary" : "bg-quaternary"} font-light rounded-full px-5 py-1`}>
            {emailCopiedToClipboard ? "copied to clipboard!" : "copy to clipboard"}
        </div>
    }

    return <div className={styles.container}>
        <h1 className={`${styles.title} colored-text`}>
            <MotionTextRevealTitle
                text={pageContent?.title1}
                elementClass={"__hoverable_title"}
            />
        </h1>

        <motion.div
            className={styles.content}
            initial={"initial"}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fade.fadeInUp()}
        >
            <div className={styles.section}>
                {pageContent?.description1?.map(item => {
                    return item?.children?.map(child => {
                        return <p key={child._key} className={styles.text}>{child.text}</p>
                    })
                })}

                {pageContent?.links?.map(item => {
                    return <p key={item._key} className={styles.text}>
                        <ArrowSvg/>
                        <a
                            className={"linkWithBorderBottomOnHover __link"}
                            href={item.link}
                            target={"_blank"}
                        >
                            {item.label}
                        </a>
                    </p>
                })}

                <p className={`${styles.text} relative`}>
                    <ArrowSvg/>
                    <Tooltip content={copyToClipboardTooltip()}>
                        <span
                            className={"linkWithBorderBottomOnHover __link"}
                            onClick={() => handleCopyEmailToClipboard(commonContent.email)}
                            onMouseOut={handleEmailLinkMouseLeave}
                        >
                          {commonContent.email}
                        </span>
                    </Tooltip>
                </p>
            </div>

            <div className={styles.section}>
                <p className={styles.text}>
                    {pageContent?.description2?.map(item => {
                        return item?.children?.map(child => {
                            return <span key={child._key} className={styles.contactFormDescription}>{child.text}</span>
                        })
                    })}
                </p>
                <form>
                    <div className={styles.formRow}>
                        <div className={styles.inputWrapper}>
                            <Input
                                placeholder={"Name*"}
                                required={true}
                                value={contactFormFields.name}
                                name={"name"}
                                handleOnChange={handleFormFieldChange}
                            />
                        </div>

                        <div className={styles.inputWrapper}>
                            <Input
                                type={"email"}
                                placeholder={"E-mail*"}
                                required={true}
                                value={contactFormFields.email}
                                name={"email"}
                                handleOnChange={handleFormFieldChange}
                            />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <Textarea
                            placeholder={"Type your message here*"}
                            value={contactFormFields.message}
                            name={"message"}
                            handleOnChange={handleFormFieldChange}
                        />
                    </div>
                    <div className={`${styles.formRow} mt-7 xs:mt-0`}>
                        <Button
                            label={loading ? pageContent.buttonLoadingLabel1 : pageContent.buttonLabel1}
                            loading={loading}
                            disabled={Object.values(contactFormFields).some(field => !field)}
                            handleOnClick={handleFormSubmission}
                        />
                    </div>
                </form>
            </div>
        </motion.div>

        <Toast
            show={showToast}
            message={toastMessage}
            duration={"3000"}
            onClose={handleToastClose}
        />
    </div>
}

export async function getStaticProps() {
    const pageContent = await getPage("contact")
    const commonContent = await getCommonContent()

    return {
        props: {
            pageContent: pageContent[0],
            commonContent: commonContent[0]
        },
        revalidate: 60
    }
}
