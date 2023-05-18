import logo from '../../../Images/Dreamy Daze Toys.png'
import { FaFacebook, FaYoutube, FaTwitter  } from 'react-icons/fa';

const Footer = () => {
    return (

        <footer className="footer p-10 bg-base-300 text-base-content mt-10">
            <div>
                <img className='rounded-lg' src={logo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            {/* <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div> */}

            <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <a href="https://twitter.com/ataullah_mesbah" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} />
      </a>
      <a href="https://www.facebook.com/mesbahoffwego" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={30} />
      </a>
    </div>
  </div>
        </footer>


    );
};

export default Footer;