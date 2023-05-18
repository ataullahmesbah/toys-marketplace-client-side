import { useState } from "react";
import logo from '../../../Images/Dreamy Daze Toys.png';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-black mb-10">
      <div className="flex items-center">
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>

      <div className="hidden md:flex md:items-center md:ml-4 gap-4">
        

        <Link to='/' className="text-gray-800 font-bold px-3 py-2 rounded-md hover:bg-gray-700">
            Home</Link>

        <a href="#" className="text-gray-800 font-bold px-3 py-2 rounded-md hover:bg-gray-700">
          About
        </a>
        <Link to='/blog' className="text-gray-800 font-bold px-3 py-2 rounded-md hover:bg-gray-700">Blog</Link>
        
        <Link to='/login' className="text-gray-800 font-bold px-3 py-2 rounded-md hover:bg-gray-700">Login</Link>

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
        <div className="md:hidden absolute top-12 right-0 z-10 bg-gray-800 w-48 mt-2 py-2 px-4 rounded">
          <Link to='/' className="block font-bold text-white py-2 hover:bg-gray-700">
            Home</Link>
          <a href="#" className="block font-bold text-white py-2 hover:bg-gray-700">
            About
          </a>
          <Link to='blog' className="block font-bold text-white py-2 hover:bg-gray-700">
            Blog
          </Link>

          
          <Link to='/login' className="block font-bold text-white py-2 hover:bg-gray-700">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
