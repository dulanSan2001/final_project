import './home.scss';
import Stories from '../../components/stories/Stories';
import Posts from '../../components/posts/Posts';
import { Create } from '@mui/icons-material';
import CreatePost from '../../components/AddPost/createPost';

function Home() {
  return (
    <div className='home'>
     <Stories/>
     <CreatePost/>
     <Posts/>
    </div>
  )
}

export default Home
