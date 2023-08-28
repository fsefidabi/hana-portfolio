import { useId } from "react"

export default function Input(props) {
  const { id = useId(), type = "text", placeholder = "", value = "", required = false, handleOnChange } = props

  return <input
    className={"w-full bg-transparent border-b-2 outline-0 text-lg"}
    id={id}
    type={type}
    placeholder={placeholder}
    value={value}
    required={required}
    onChange={(e) => handleOnChange(e.target.value)}
  />
}
