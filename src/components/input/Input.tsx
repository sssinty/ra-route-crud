import { ChangeEventHandler } from "react"

interface IInput {
  onChange: ChangeEventHandler<HTMLInputElement>,
  value:  string
}
const Input = ({onChange, value} : IInput) => {
  return (<input className="input-post" type="text" value={value} onChange={onChange}/>)
}

export default Input