import React, { useState } from 'react';
import Comments from '../Comments/Comments';
import './post.scss';
import {
  FavoriteBorderOutlined,
  MoreHoriz,
  FavoriteOutlined,
  TextsmsOutlined,
  ShareOutlined,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const liked = false;

  const profilePicUrl = post.profilePic?.startsWith("http")
    ? post.profilePic
    : `http://localhost:8800/${post.profilePic}`;

  const postImgUrl = post.img?.startsWith("http")
    ? post.img
    : `http://localhost:8800${post.img}`;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={profilePicUrl} alt="User" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
                <span className="date">1 min ago</span>
              </Link>
            </div>
          </div>
          <MoreHoriz />
        </div>

        <div className="content">
          <p>{post.desc}</p>
          {post.img && <img src={postImgUrl} alt="Post" />}
        </div>

        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlined />
            9 Comments
          </div>
          <div className="item">
            <ShareOutlined />
            Share
          </div>
        </div>

        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
