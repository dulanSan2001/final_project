import React, { useState } from 'react';
import Comments from '../Comments/Comments';
import './post.scss';
import { FavoriteBorderOutlined, MoreHoriz, FavoriteOutlined, TextsmsOutlined, ShareOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // you forgot to import Link!



const Post = ({ post }) => {
  const [commentOpen,setCommentOpen] = useState(false);
    const liked = false;
  return (
    <div className='post'>
        <div className="container">
      <div className="user">
        <div className="userInfo">
          <img src={post.profilePic} alt="" />
          <div className="details">
            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}><span className='name'>{post.name}</span>
            <span className='date'>1 min ago</span>
            </Link>
          </div>
        </div>
        <MoreHoriz />
      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img src={post.img} alt="" />
      </div>
      <div className="info">
        <div className="item">
          {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
          12 Likes
        </div>
        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
          {liked ? <TextsmsOutlined/> : <TextsmsOutlined />}
          9 Comments
        </div>
        <div className="item">
          <ShareOutlined />
          Share
        </div>
      </div>
      { commentOpen && <Comments/>}
      </div>
    </div>
  );
};

export default Post;
