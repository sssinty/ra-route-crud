import { MouseEventHandler } from "react"

interface IButton {
  text: string,
  className: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}
const Button = ({className, text, onClick} : IButton) => {
  return <button className={className} onClick={onClick}>{text}</button>
}

export default Button;