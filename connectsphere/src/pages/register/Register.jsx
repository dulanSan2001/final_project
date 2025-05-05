import { Link } from 'react-router-dom';
import './register.scss';

function Register() {
  
  return (
    <div className="register">
      <div className="cart">
        
        <div className="right">
          <h1>Connect<br/>Sphere.</h1>
          <p>Welcome to our platform. Join us today!</p>
          <span>Do you have an account?</span>
          <Link to = "/login">
          <button className="register-btn">Login</button>
          </Link>
        </div>

        
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register
