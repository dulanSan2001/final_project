import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import NavBar from './components/navbar/NavBar';
import Profile from './pages/profile/Profile';
import './style.scss';
import {useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';






const Layout = () => {
  const{darkMode}=useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>


      <NavBar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
        <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const {currentUser} = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (<ProtectedRoute><Layout /></ProtectedRoute>),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;







