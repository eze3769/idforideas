import React, { useEffect } from "react";
import PostCard from "../../components/postCard/PostCard";
import Loader from "../../components/loader/Loader";
import NavBar from "../../components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../../features/posts/posts";

const Home = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.posts.loading);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(listPosts())
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className="container">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {posts !== [] ? (
              posts.map((el, index) => {
                return (
                  <PostCard
                    id={el.id}
                    image_url={el.image_url}
                    created_at={el.created_at}
                    key={index}
                  />
                );
              })
            ) : (
              <p>No hay post aún</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
