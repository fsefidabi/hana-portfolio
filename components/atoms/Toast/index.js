import { useEffect, useState } from "react"
import styles from "./toast.module.css"

export function Toast(props) {
  const { message, show, duration, onClose = new Function() } = props
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    setShowToast(show)
    setTimeout(() => {
      onClose()
    }, duration)
  }, [show])


  return showToast && <div className={styles.container}>
    <p className={styles.message}>{message}</p>
  </div>
}
