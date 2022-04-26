import React from "react";
import "./postCard.css";
import like from "./like.png";
import liked from "./liked.png";
import bookmark from "./bookmark.png";
// import { allLikesGET } from "../../sdk/likes";
import { useSelector } from "react-redux";

const PostCard = ({ id, image_url, created_at, likeHandle }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(0);

  const token = useSelector((state) => state.auth.access_token);

  const date = new Date(Date.now() - new Date(created_at).getTime()).getTime();
  const days = Math.floor(date / 86400000);
  const hours = Math.floor((date - days * 86400000) / 3600000);
  const minutes = Math.floor(
    (date - days * 86400000 - hours * 3600000) / 60000
  );

  React.useEffect(() => {
    // likesGET(id, token)
    // .then(res => {
    //   const data = res.json();
    //   console.log(data)
    //   if (data) {
    //     setIsLiked(true);
    //   } else {
    //     setIsLiked(false);
    //   }
    // })

    // try {
    //   const response = allLikesGET(id)
    //   const data =response.json();
    //   console.log(data)
    //   setLikes(data);
    // }

    // catch(err) {
    //   console.error(err)
    // }
    setLikes(Math.floor(Math.random()*100));
  }, [id, token]);

  return (
    <div className="container card-container">
      <div className="card">
        <img className="card-img" src={image_url} alt={`post-${id}`} />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="align-items-start">
              {isLiked ? (
                <button
                  className="border-0 bg-white"
                  onClick={() => likeHandle(id, isLiked, setIsLiked)}
                >
                  <img className="pb-1" src={liked} alt="like" />
                </button>
              ) : (
                <button className="border-0 bg-white" onClick={likeHandle}>
                  <img className="pb-1" src={like} alt="like" />
                </button>
              )}
            </div>
            <img src={bookmark} alt="bookmark" />
          </div>
          <p className="likes-text">{likes} Likes</p>
          <span className="card-time">{`${days && days + " DAYS"} ${
            hours && hours + " HOURS"
          } ${minutes && minutes + " MIN"} AGO`}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
