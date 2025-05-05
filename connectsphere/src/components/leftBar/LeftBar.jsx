import React from 'react';
import './leftBar.scss';
import friends from '../../assets/friends.png';
import groups from '../../assets/groups.png';
import market from '../../assets/market.png';
import memories from '../../assets/memories.png';
import watch from '../../assets/watch.png';
import dul from '../../assets/dul.png';
import events from '../../assets/events.png';
import game from '../../assets/game.png';
import gallery from '../../assets/gallery.png';
import movie from '../../assets/movie.png';
import message from '../../assets/message.png';
import happy from '../../assets/happy.png';
import tutorial from '../../assets/tutorial.png';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';



function LeftBar() {
   const{currentUser}=useContext(AuthContext);
  return (
    <div className='leftBar'>
      <div className='container'>
        <div className='menu'>
          <div className='user'>
            <img src={currentUser?.profilePic} width={25} height={25}    alt="pro icon" />
            <span>{currentUser?.name}</span>
          </div>
          <div className='item'>
          <img src={friends} width={25} height={25} alt="Friends icon" />

            <span>Friends</span>
          </div> 


          <div className='item'>
          <img src={groups} width={25} height={25} alt="groups icon" />

            <span>Groups</span>
          </div> 

          <div className='item'>
          <img src={market} width={25} height={25} alt="market icon" />

            <span>Marketplace</span>
          </div> 

          <div className='item'>
          <img src={watch} width={25} height={25} alt="watch icon" />

            <span>Watch</span>
          </div> 

          <div className='item'>
          <img src={memories} width={25} height={25} alt="memory icon" />

            <span>memories</span>
          </div> 

        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>

          <div className='item'>
          <img src={events} width={25} height={25} alt="event icon" />

            <span>Events</span>
          </div>

          <div className='item'>
          <img src={game} width={25} height={25} alt="game icon" />

            <span>Gaming</span>
          </div>

          <div className='item'>
          <img src={gallery} width={25} height={25} alt="gallery icon" />

            <span>Gallery</span>
          </div>

          <div className='item'>
          <img src={movie} width={25} height={25} alt="movie icon" />

            <span>Videos</span>
          </div>

          <div className='item'>
          <img src={message} width={25} height={25} alt="message icon" />

            <span>Messages</span>
          </div>



        </div>
        <hr/>
        <div className='menu'>
          <span>Others</span>
          <div className='item'>
          <img src={happy} width={25} height={25} alt="mood icon" />

            <span>Mood Calender</span>
          </div>

          <div className='item'>
          <img src={tutorial} width={25} height={25} alt="tutorial icon" />

            <span>Tutorials</span>
          </div>

         

        </div>
      </div>
    </div>
  );
};

export default LeftBar;

