import './login.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

function Login() {
   const {login} = useContext(AuthContext);
   const handleLogin = () => {
     login();
   }
  return (
    <div className="login">
      <div className="cart">
        
        <div className="left">
          <h1>Connect<br/>Sphere</h1>
          <p>Welcome to our platform. Join us today!</p>
          <span>Don't you have an account?</span>
          <Link to = "/register">
          <button className="register-btn">Register</button>
          </Link>
        </div>

        
        <div className="right">
          <h1>LOGIN</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;


