import React from 'react';
import './postCard.css';
import like from './like.png';
import dislike from './dislike.png';
import bookmark from './bookmark.png'

const PostCard = ({id, image_url, created_at}) => {

  const date = new Date(Date.now() - new Date(created_at).getTime()).getTime()
  const days = Math.floor(date / 86400000)
  const hours = Math.floor((date - days*86400000) / 3600000)
  const minutes = Math.floor((date - days*86400000 - hours*3600000) / 60000)

  return (
  <div className='container card-container'>
      <div className="card">
        <img className="card-img" src={image_url} alt={`post-${id}`} />
        <div className="card-body">
            <div className='d-flex justify-content-between'>
              <div className='align-items-center'>
                <img className='pb-1' src={like} alt="like" />
                <img className='pt-1' src={dislike} alt="dislike" />
              </div>
              <img src={bookmark} alt="bookmark" />
            </div>
            <p className='likes-text'>{"0"} Likes</p>
            <span className='card-time'>{`${days && days+' DAYS'} ${hours && hours+' HOURS'} ${(minutes) && minutes+' MIN'} AGO`}</span>
        </div>
    </div>
  </div>
  );
};

export default PostCard;
