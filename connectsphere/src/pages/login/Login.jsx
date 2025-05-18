import './login.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

function Login() {

   const [inputs, setInputs] = useState({
      username: "",
      password: "",
     
    });
  
    const [err, setErr] = useState(null)
      
    const navigate= useNavigate();
  
     const handleChange = (e) => {
      setInputs((prev) => ({...prev, [e.target.name]: e.target.value }))
       }






   const {login} = useContext(AuthContext);
   const handleLogin = async (e) => {

    
     e.preventDefault();
     try {
       await login(inputs);
       navigate("/");
   
     } catch (err) {
       setErr(err.response.data );
       console.log(err);
       
     }
     
   }
  //  if()
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
            <input type="text" placeholder="Username"  name="username" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            {err && err}
            <button onClick={handleLogin}>LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;


