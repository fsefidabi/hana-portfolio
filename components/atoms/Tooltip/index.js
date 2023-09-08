import Tippy from "@tippyjs/react"
import { followCursor } from "tippy.js"

export default function Tooltip(props) {
  const { content, placement = "top", animation, followCursorProp = "horizontal", children } = props

  return <Tippy
    content={content}
    placement={placement}
    animation={animation}
    followCursor={followCursorProp}
    plugins={[followCursor]}
    hideOnClick={false}
  >
    {children}
  </Tippy>
}
