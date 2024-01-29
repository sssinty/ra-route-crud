import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react";
import FormPost from "../Form"

interface ICreatePost {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  onClickExite?: MouseEventHandler<HTMLButtonElement>,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  onSubmit: FormEventHandler<HTMLFormElement>,
  value: string,
  
}

const CreatePost = ({value, onChange, onClickExite, onClick, onSubmit} : ICreatePost) => {
  return(
    <div className="create-post">
      <FormPost text="Опубликовать" value={value} onChange={onChange} onClick={onClick} onClickExite={onClickExite} onSubmit={onSubmit}/> 
    </div>
  )
}
export default CreatePost;