import './profile.scss';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts';
import Post from '../../components/Post/Post';



function Profile() {
  return (
    <div className='profile'>
      <div className="images">
        <img src="/cover.jpg" alt="" className='cover'/>
        <img src="/pro.jpg" alt="" className='profilePic'/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
        <div className="left">
        <a href='https://www.facebook.com'><FacebookTwoToneIcon fontSize='large'/></a>
<a href='https://www.instagram.com'><InstagramIcon fontSize='large'/></a>
<a href='https://www.twitter.com'><TwitterIcon fontSize='large'/></a>
<a href='https://www.linkedin.com'><LinkedInIcon fontSize='large'/></a>
<a href='https://www.pinterest.com'><PinterestIcon fontSize='large'/></a>

        </div>
        <div className="center">
            <span>Jane Doe</span>
            <div className="info">
            {/* <div className="item">
                <PlaceIcon/>
                <span>USA</span>
            </div> */}
            {/* <div className="item">
                <LanguageIcon/>
                <span></span>
                
            </div> */}
            <button>follow</button>
            </div>
            </div>
        <div className="right">
            <EmailIcon/>
            <MoreVertIcon/>
        </div>
        </div> 
        <Posts/>
      </div>

    </div>
  )
}

export default Profile
