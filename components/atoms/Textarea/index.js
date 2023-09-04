import { useId } from "react"

export default function Textarea(props) {
  const { id = useId(), placeholder = "", rows = "2", value, name, required = false, handleOnChange } = props

  return <textarea
    className={"w-full bg-transparent border-b-2 outline-0 resize-none text-lg"}
    id={id}
    placeholder={placeholder}
    rows={rows}
    value={value}
    name={name}
    required={required}
    onChange={handleOnChange}
  />
}
