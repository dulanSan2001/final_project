import React from 'react'
import './rightBar.scss'

function RightBar() {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className='item'>
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt=''/>
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt=''/>
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt=''/>
              <p>
              <span>John Doe</span> commented a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>

         
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt=''/>
              <p>
              <span>John Doe</span> liked a post
              </p>
            </div>
            <span>5 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt=''/>
              <p>
              <span>John Doe</span> upload a post
              </p>
            </div>
            <span>7 min ago</span>
          </div>


        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt=''/>
              <div className="online"/>
             <span>John Doe </span>
            </div>
            
          </div>
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt=''/>
              <div className="online"/>
             <span>John Doe </span>
            </div>
            
          </div>
          <div className="user">
            <div className="userInfo">
              <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt=''/>
              <div className="online"/>
             <span>John Doe </span>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default RightBar
