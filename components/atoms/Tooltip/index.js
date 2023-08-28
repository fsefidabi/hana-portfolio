import Tippy from "@tippyjs/react"
import { followCursor } from "tippy.js"

export default function Tooltip(props) {
  const { content, children } = props

  return <Tippy
    content={content}
    followCursor={"horizontal"}
    plugins={[followCursor]}
    hideOnClick={false}
  >
    {children}
  </Tippy>
}
