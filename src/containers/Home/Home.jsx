import React, { useEffect, useState } from 'react';
import { postsGET } from '../../api/apiFetch';
import PostCard from '../../components/postCard/PostCard';

const Home = () => {
  const [posts, setPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    postsGET()
    .then(res => res.json())
    .then((res)=>{
      console.log(res)
      if (!res.error){
        setPosts(res)
        setIsLoading(false)
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
              (posts !== []) 
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
