import { useEffect, useState } from "react"
import { useCopyToClipboard } from "hooks/useCopyToClipboard"
import ArrowSvg from "svgIcons/arrow.svg"
import Input from "components/atoms/Input"
import Textarea from "components/atoms/Textarea"
import Button from "components/atoms/Button"
import Tooltip from "components/atoms/Tooltip"
import { Toast } from "components/atoms/Toast"
import styles from "./Contact.module.css"

const INITIAL_CONTACT_FORM_FIELDS = {
  name: "",
  email: "",
  message: ""
}

export default function Contact() {
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

  function handleFormFieldChange(fieldType, value) {
    setContactFormFields(prev => ({ ...prev, [fieldType]: value }))
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

  return <div className={styles.container}>
    <h1 className={`${styles.title} colored-text`}>
      LET'S CONNECT!
    </h1>

    <div
      className={styles.content}>
      <div className={styles.section}>
        <p className={styles.text}>
          If you have any inquiries, projects to discuss, or simply want to connect and have a conversation, I’m here!
        </p>

        <p className={styles.text}>
          Feel free to DM me on:
        </p>

        <p className={styles.text}>
          <ArrowSvg/>
          <a className={"linkWithBorderBottomOnHover"}
             href={"https://www.linkedin.com/in/hananehsefidabi/"}
             target={"_blank"}>LinkedIn</a>
        </p>

        <p className={styles.text}>
          <ArrowSvg/>
          <a className={"linkWithBorderBottomOnHover"}
             href={"https://www.instagram.com/hananehsefidabi/"}
             target={"_blank"}>Instagram</a>
        </p>

        <p className={`${styles.text} relative`}>
          <ArrowSvg/>
          <Tooltip content={
            <div
              className={`${emailCopiedToClipboard ? "bg-tertiary" : "bg-quaternary"} font-light rounded-full px-5 py-1`}>
              {emailCopiedToClipboard ? "copied to clipboard!" : "copy to clipboard"}
            </div>
          }>
            <span
              className={"linkWithBorderBottomOnHover"}
              onClick={() => handleCopyEmailToClipboard("hananehsefidabi@gmail.com")}
              onMouseOut={handleEmailLinkMouseLeave}
            >
              hananehsefidabi@gmail.com
            </span>
          </Tooltip>
        </p>
      </div>

      <div className={styles.section}>
        <p className={styles.text}>
          <span className={styles.contactFormDescription}>or simply drop me a line here. I'll be more than happy to respond</span>
        </p>
        <form>
          <div className={styles.formRow}>
            <div className={styles.inputWrapper}>
              <Input
                placeholder={"Name*"}
                required={true}
                value={contactFormFields.name}
                handleOnChange={(value) => handleFormFieldChange("name", value)}
              />
            </div>

            <div className={styles.inputWrapper}>
              <Input
                type={"email"}
                placeholder={"E-mail*"}
                required={true}
                value={contactFormFields.email}
                handleOnChange={(value) => handleFormFieldChange("email", value)}
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <Textarea
              placeholder={"Type your message here*"}
              value={contactFormFields.message}
              handleOnChange={(value) => handleFormFieldChange("message", value)}
            />
          </div>
          <div className={`${styles.formRow} mt-7 xs:mt-0`}>
            <Button
              label={loading ? "Sending..." : "Send"}
              loading={loading}
              disabled={Object.values(contactFormFields).some(field => !field)}
              handleOnClick={handleFormSubmission}
            />
          </div>
        </form>
      </div>
    </div>

    <Toast
      show={showToast}
      message={toastMessage}
      duration={"3000"}
      onClose={handleToastClose}
    />
  </div>
}
