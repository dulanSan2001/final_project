import React from 'react'
import './comments.scss'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
const Comments=() =>{
    const {currentUser}=useContext(AuthContext);
    const comments=[{
        id:1,
        desc:"This photo = pure joy ✨",
        name:"John Doe",
        userId:1,
        profilePic:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:2,
        desc:"nice pic 😎❤️",
        name:"John Doe",
        userId:1,
        profilePic:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
   
]
  return (
    <div className='comments'>
        <div className="write">
        {currentUser && <img src={currentUser.profilePic} alt="" />}

            <input type="text" placeholder='write a comment' />
            <button>send</button>
        </div>
      {
        comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 day ago</span>
            </div>
        ))
      }
    </div>
  )
}

export default Comments
