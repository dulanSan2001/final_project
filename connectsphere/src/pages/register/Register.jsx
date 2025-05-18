import { Link, useNavigate } from 'react-router-dom';
import './register.scss';
import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [err, setErr] = useState(null);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, name } = inputs;
    if (!username || !email || !password || !name) {
      setErr("All fields are required.");
      return;
    }
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      toast.success("Registration successful! Redirecting to login...", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
      });

      // Delay navigation to let toast show
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setErr(err.response.data || "Something went wrong. Please try again.");
    }
  };
  console.log(err)

  return (
    <div className="register">
      <div className="cart">

        <div className="right">
          <h1>Connect<br />Sphere.</h1>
          <p>Welcome to our platform. Join us today!</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button className="register-btn">Login</button>
          </Link>
        </div>


        <div className="left">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} value={inputs.username} />
            <input type="email" placeholder="Email" name="email" onChange={handleChange} value={inputs.email} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={inputs.password} />
            <input type="text" placeholder="Name" name="name" onChange={handleChange} value={inputs.name} />
            {/* {err && err} */}
            {err && <span className="error">{err}</span>}


            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      {/* Toast container */}
      <ToastContainer />
    </div>
  );
}

export default Register;
