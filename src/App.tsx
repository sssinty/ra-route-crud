import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Link,Route, Routes, useNavigate, useParams} from 'react-router-dom'
import Posts from './components/post/Posts'
import PostViewing from './components/post/PostViewing'
import Button from './components/Button'
import CreatePost from './components/post/CreatePost'
import EditePost from './components/post/EditPost'

interface IPost {
  id: number,
  content: string
}

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [contentPost, setContent] = useState<string>();
  const [stateSendPost, setSendPost] = useState<boolean>(false);
  const [deletePostStatus, setStatus] = useState<boolean>(false);
  const [invisibleEditPost, setInvisible] = useState<boolean>(true)

  const navigate = useNavigate();
  
  const fetchUsersPost = (url : string) => {
    axios.get(url)
    .then((resspons) => {
      console.log(resspons)
      setPosts(resspons.data)
    })
  }

  useEffect(() => {
    void fetchUsersPost("http://localhost:7070/posts");

  },[])

  useEffect(() => {
    void fetchUsersPost("http://localhost:7070/posts");

  },[stateSendPost])

  useEffect(() => {
    void fetchUsersPost("http://localhost:7070/posts");

  },[deletePostStatus])



  const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  const hendlerChange = (event : ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  }


  const publishPostBtn = (event : MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) : void=> {
    axios.post('http://localhost:7070/posts', {
      "content": contentPost
    })
    .catch((error) => {
      console.log(error)
    })
    setSendPost(!stateSendPost);
    navigate('/')
  }

  const deletePostBtn = (id : string) => {
    axios.delete(`http://localhost:7070/posts/${id}`)
    .then((resspons) => {
      console.log(resspons)
    })
    navigate('/')
    setStatus(!deletePostStatus)
  }

  const editPostBtn = (id : string) => {
    console.log(id)
    axios.put(`http://localhost:7070/posts/${id}`, {
      "id": id, "content": contentPost
    })
    .then((resspons) => console.log(resspons))
    .catch((error) => {
      console.log(error)
    })
    navigate('/')
    setInvisible(!invisibleEditPost)
    setSendPost(!stateSendPost);
  }

  const VievingPost = () => { 
    const params = useParams();
    return (
      <>
        {posts.map((post) => {
          if(post.id === Number(params.id)) {
            if(invisibleEditPost === true) {
              return <PostViewing text={post.content} onClickChange={() => setInvisible(!invisibleEditPost)} onClickDelete={()=> deletePostBtn(params.id)} />
            } if (invisibleEditPost === false) {
              return <EditePost value={post.content} onSubmit={handleSubmit} onChange={hendlerChange} onClick={() => editPostBtn(params.id)} onClickExite={() => setInvisible(!invisibleEditPost)} />
            }
          }

        })}
      </>
    )
  }

  const Main = () => {
    return <>
      <Button className='btn-create' text='Создать' onClick={() => navigate('/posts/new', {replace: false})}/>
      {posts.map((post) => {
        return <Link to={`/posts/${post.id}`}>
              <Posts nameUser='User User' photo='' text={post.content} timeCreatePost={5} key={post.id}/>
        </Link>
      })}
    </>
  }

  return (
    <div className='conteiner-app'>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/posts/new' element={<CreatePost onSubmit={handleSubmit} onChange={hendlerChange} onClick={publishPostBtn} onClickExite={() => {navigate('/')}}/>}/>
        <Route path='/posts/:id' element={<VievingPost />}/>
      </Routes>
    </div> 

  )
}

export default App
