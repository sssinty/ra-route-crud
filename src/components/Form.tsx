import { ChangeEventHandler, FormEventHandler, MouseEventHandler} from "react"
import Button from "./Button"
import Input from "./input/Input"
import { Form } from "react-router-dom"

interface IForm {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  onClickExite?: MouseEventHandler<HTMLButtonElement>,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  onSubmit: FormEventHandler<HTMLFormElement>,
  text: string,
  value:  string
}

const FormPost = ({onClick, onClickExite, onChange, text, onSubmit, value} : IForm) => {
  return(
    <form onSubmit={onSubmit}>
      <Input onChange={onChange} value={value}/>
      <Button className="publish" text={text} onClick={onClick}/>
      <Button className="exite" text="X" onClick={onClickExite}/>
    </form>
  )
}

export default FormPost;