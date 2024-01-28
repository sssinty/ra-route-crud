interface IPost {
 text: string,
 photo: string,
 nameUser: string,
 timeCreatePost: number,
}

const Posts = ({text, photo, nameUser, timeCreatePost} : IPost) => {
  return (
    <>
      <div className="user">
        <div className="info">
            <img src={photo} alt="" />
            <div className="info-user">
              <h4 className="name">{nameUser}</h4>
              <p className="time-create">{timeCreatePost} min</p>
            </div>
        </div>
        <div className="post-text">
          <p className="text">{text}</p>
        </div>
      </div>
    </>
  )
}

export default Posts;