import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react";
import FormPost from "../Form";

interface IEditePost {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  onClickExite?: MouseEventHandler<HTMLButtonElement>,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  onSubmit: FormEventHandler<HTMLFormElement>,
  value: string
}

const EditePost = ({onClick, onSubmit, onClickExite, onChange, value} : IEditePost) => {
  return (
    <div className="edite-post">
      <FormPost value={value} text="Изменить"  onChange={onChange} onClick={onClick} onClickExite={onClickExite} onSubmit={onSubmit}/> 
    </div>
  )
}
export default EditePost;