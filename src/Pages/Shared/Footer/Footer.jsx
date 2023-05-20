import { Link } from 'react-router-dom';
import logo from '../../../Images/banner/logo toys.png'
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (



    <footer className=" footer p-10 bg-base-300 text-base-content mt-10" >

      <div>
        <Link to='/'><img className='w-48' src={logo} alt="" /></Link>
        <p>Dreamy Daze Toys
          <br />Visit us today and let the magic begin!</p>
      </div>
      <div>
        <span className="footer-title">Animal Toy Categories</span>
        <a className="link link-hover">All Toys</a>
        <a className="link link-hover">Cats</a>
        <a className="link link-hover">Birds</a>
        <a className="link link-hover">Small Animals</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to='/aboutus' className="link link-hover">About us</Link>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press</a>
      </div>


      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4 ">
          <a className='text-blue-500' href="https://twitter.com/ataullah_mesbah" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a className='text-blue-600' href="https://www.facebook.com/mesbahoffwego" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a className='text-red-700' href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} />
          </a>
        </div>


      </div>




    </footer>



  );
};

export default Footer;