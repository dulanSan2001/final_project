import React, { useEffect, useState } from 'react';
import './posts.scss';
import Post from '../Post/Post';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/posts/allposts", {
          withCredentials: true,
        });
        setPosts(res.data);
        console.log(res, "post data");
        
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts.");
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts">
      {error && <p>{error}</p>}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
