import React from 'react';
import './postCard.css';
const PostCard = ({id, image_url, created_at}) => {
  return (
  <div className='container card-container'>
      <div className="card">
        <img className="card-img" src={image_url} alt={`post-${id}`} />
        <div className="card-body">
            {`Posted at ${Date(created_at).toString()}`}
        </div>
    </div>
  </div>
  );
};

export default PostCard;
