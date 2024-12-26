import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { setUser } from "../Redux/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  console.log(user);

  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://13.202.119.82:8000/api/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <nav className="bg-gray-800 text-gray-200 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className=" font-bold text-lg">
          <Link to="/">BlogApp</Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className=" hover:text-gray-500">
            Home
          </Link>
          <Link to="/createpost" className=" hover:text-gray-500">
            Create Post
          </Link>
          <Link to="/myposts" className=" hover:text-gray-500">
            My Posts
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <div className="flex items-center space-x-2 ">
                <img
                  src={user.profilePhoto}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full"
                />
                <span className="">{user.fullName}</span>
              </div>
              <button
                onClick={logoutHandler}
                className="text-white px-4 py-2 bg-red-500 rounded hover:bg-blue-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white px-4 py-2 bg-green-600 rounded hover:bg-green-700"
              >
                Signup
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <RxCross1 /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden space-y-4 py-4">
          <div className="flex flex-col items-center justify-center">
            <Link to="/" className="px-6 py-2">
              All Posts
            </Link>
            <Link to="/createpost" className="px-6 py-2">
              Create Post
            </Link>
          </div>
          {user ? (
            <div className="flex justify-center w-full gap-[10px]">
              <div className="flex items-center space-x-2">
                <img
                  src={user.profilePhoto}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full"
                />
                <span className="">{user.fullName}</span>
              </div>
              <Link
                to="/login"
                onClick={logoutHandler}
                className="text-center px-4 py-2 bg-red-500 rounded hover:bg-blue-700"
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="flex flex-col space-y-2 px-6 py-2">
              <Link
                to="/login"
                className="w-fit mx-auto text-center px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="w-fit mx-auto text-center px-4 py-2 bg-green-600 rounded hover:bg-green-700"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
