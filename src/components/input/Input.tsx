import { ChangeEventHandler } from "react"

interface IInput {
  onChange: ChangeEventHandler<HTMLInputElement>
}
const Input = ({onChange} : IInput) => {
  return <input className="input-post" type="text" onChange={onChange} />
}

export default Input