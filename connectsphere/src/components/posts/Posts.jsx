import React from 'react';
import './posts.scss';
import Post from '../Post/Post';

function Posts() {
  // Temporary data
  const posts = [
    {
      id: 1,
      name: "Mathew Alex",
      userId: 1,
      profilePic: "pro.jpg",
      desc: "Good times + Crazy friends = Amazing memories 😄",
      date: "1 min ago",
      img:"grouppic.jpg"
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      desc: "Doing nothing feels like everything 😌",
      date: "3 min ago",
      img:"sunrise.jpg"
    }
  ];

  return (
    <div className="posts">
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
