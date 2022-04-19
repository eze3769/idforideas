import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { dislikesPost, likesPost, postsGET } from "../../sdk/apiFetch";
import PostCard from "../../components/postCard/PostCard";
import { customContext } from "../../context/AppContext";
import Loader from "../../components/loader/Loader";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isFirstLog, setFirstLog } = useState(useContext(customContext));

  useEffect(() => {
    if (isFirstLog) {
      Swal.fire({
        imageUrl: "https://i.ibb.co/LRWZyXG/Inked-Oan1-LI.jpg",
        title: "Woho! We'r really happy to \n have you in our community!",
        text: "Now you can finde inspiration that will improve your looks! \n But first, let me give you a quick reminder of a few little things...",
        confirmButtonText: "<b>Continue<b>",
        confirmButtonColor: "#EF62A3",
        showCloseButton: true,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        imageAlt: "errorLogin",
        customClass: {
          container: "sweet_container",

          title: "sweet_title",
          text: "sweet_text",
          confirmButton: "button",
          image: "sweet_image",
        },
      })
        .then(() => {
          Swal.fire({
            imageUrl: "https://i.ibb.co/vd4WxNv/confirmation-Label.jpg",
            title: "Don't miss the trends check \n your email",
            text: "Confirm your user account",
            confirmButtonText: "<b>Continue<b>",
            confirmButtonColor: "#EF62A3",
            showCloseButton: true,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
            imageAlt: "errorLogin",
            customClass: {
              container: "sweet_container",

              title: "sweet_title",
              text: "sweet_text",
              confirmButton: "button",
              image: "sweet_image",
            },
          });
        })
        .finally(() => {
          setFirstLog(false);
        });
    }
  });

  useEffect(() => {
    postsGET()
      .then((res) => res.json())
      .then((res) => {
        if (!res.error) {
          setPosts(res);
          setIsLoading(false);
          console.log(res);
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const likeHandle = (id, isLiked, setIsLiked) => {
    if (isLiked) {
      dislikesPost(id)
        .then((res) => {
          setIsLiked(false);
        })
        .catch((err) => console.error(err));
    } else {
      likesPost(id)
        .then((res) => {
          setIsLiked(true);
        })
        .catch((err) => console.error(err));
    }
  };
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
                    likeHandle={likeHandle}
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
