import React from 'react';

const PostCard = ({id, image_url, created_at}) => {
  return (
  <div className='container'>
      <div class="card">
        <img src={image_url} alt={`post-${id}`} />
        <div class="card-body">
            {`Posted at ${created_at}`}
        </div>
    </div>
  </div>
  );
};

export default PostCard;
