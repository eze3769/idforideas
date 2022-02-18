import React, { useEffect, useState } from 'react';
import { postsGET } from '../../api/apiFetch';
import PostCard from '../../components/postCard/PostCard';

const Home = () => {
  const [posts, setPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    postsGET()
    .then((res)=>{
      if (res.status=== 200){
        setPosts(res)
        setIsLoading(true)
      }
    })
    .catch((error) =>{
      console.warn(error)
    })
  },[])

  console.log(posts)
  return (
      <>
        <div className='container'>
          {
            isLoading
            ?
            <div className="d-flex justify-content-center mt-3">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            :
            <>
            {
              (typeof posts === Array && posts !== []) 
              ?
              posts.map((el,index)=>{
                return(
                <PostCard id={el.id} image_url={el.image_url} created_at={el.created_at} key={index} />
                )
              })
              :
              <p>No hay post aún</p>
            }
            </>
          }
        </div>
      </>
  );
};

export default Home;
