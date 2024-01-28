import { ChangeEventHandler, MouseEventHandler } from "react";
import FormPost from "../Form"

interface ICreatePost {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  onClickExite?: MouseEventHandler<HTMLButtonElement>,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  value: string,
}

const CreatePost = ({value, onChange, onClickExite, onClick} : ICreatePost) => {
  return(
    <div className="create-post">
      <FormPost text="Опубликовать" value={value} onChange={onChange} onClick={onClick} onClickExite={onClickExite} /> 
    </div>
  )
}
export default CreatePost;