import { useContext, useState } from "react";

import logo from '../../../Images/banner/logo toys.png';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch(error => console.log(error))
  }

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-black mb-10">
      <div className="flex items-center">
        <Link to='/'><img className="w-48" src={logo} alt="" /></Link>
      </div>

      <div className="hidden md:flex md:items-center md:ml-4 gap-4">


        <Link to='/' className="text-gray-800 font-bold px-3 py-2 rounded-md hover:bg-gray-700">
          Home</Link>

        <Link to='/aboutus' className="text-gray-800 font-bold px-3 py-2 rounded-md hover:bg-gray-700">
          About
        </Link>
        <Link to='/blog' className="text-gray-800 font-bold px-3 py-2 rounded-md hover:bg-gray-700">Blog</Link>

        {/* <Link to='/login' className="text-gray-800 font-bold px-3 py-2 rounded-md hover:bg-gray-700">Login</Link> */}


        {user?.email ? (
          <>
            <Link className="font-bold" to="/mytoys">My Toys</Link> 
            <Link className="font-bold" to="/alltoys">All Toys</Link> 
            
            <Link className="font-bold" to="/addtoy">Add Toys</Link>

            {user?.photoURL ? (
              <div>
                <img className="w-12 rounded-full" src={user.photoURL} alt="" />
              </div>
            ) : (
              <div>
                <img className="w-12 rounded-full" src="/default-profile-image.jpg" alt="Default Profile" />
              </div>
            )}

            <Link to='/'><button className="font-bold" onClick={handleLogOut}>Log Out</button></Link>
          </>
        ) : (
          <Link className="font-bold" to="/login">Login</Link>
        )}





      </div>

      <div className="md:hidden">
        <button
          onClick={handleMenuToggle}
          className="text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-12 right-0 z-10 bg-gray-800 w-48 mt-2 py-2 px-4 rounded h-96">
          <Link to='/' className="block font-bold text-white py-2 hover:bg-gray-700">
            Home</Link>
          <Link to='/aboutus' className="block font-bold text-white py-2 hover:bg-gray-700">
            About
          </Link>
          <Link to='blog' className="block font-bold text-white py-2 hover:bg-gray-700">
            Blog
          </Link>


          {user?.email ? (
          <>
            <Link className="block font-bold text-white py-2 hover:bg-gray-700" to="/mytoys">My Toys</Link> 
            
            <Link className="block font-bold text-white py-2 hover:bg-gray-700" to="/alltoys">All Toys</Link> 
            
            <Link className="block font-bold text-white py-2 hover:bg-gray-700" to="/addtoy">Add Toys</Link>

            {user?.photoURL ? (
              <div>
                <img className="w-12 rounded-full" src={user.photoURL} alt="" />
              </div>
            ) : (
              <div>
                <img className="w-12 rounded-full" src="/default-profile-image.jpg" alt="Default Profile" />
              </div>
            )}

            <Link to='/'><button className="block font-bold text-white py-2 hover:bg-gray-700" onClick={handleLogOut}>Log Out</button></Link>
          </>
        ) : (
          <Link className="block font-bold text-white py-2 hover:bg-gray-700" to="/login">Login</Link>
        )}


        </div>
      )}
    </nav>
  );
};

export default Navbar;
