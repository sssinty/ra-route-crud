import { MouseEventHandler } from "react";
import Button from "../Button";
import Posts from "./Posts";

interface IPostViewing {
  onClickChange: MouseEventHandler<HTMLButtonElement>,
  onClickDelete: MouseEventHandler<HTMLButtonElement>,
  text: string, 
}

const PostViewing = ({onClickChange, onClickDelete, text} : IPostViewing) => {
  return (
    <div className="post-viewing">
      <Posts nameUser="User User" photo="" text={text} timeCreatePost={5} />
      <Button className="btn-change" text="Изменить" onClick={onClickChange}/>
      <Button className="btn-delete" text="Удалить" onClick={onClickDelete}/>
    </div>
  )
}

export default PostViewing;