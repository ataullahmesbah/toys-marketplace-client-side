import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToysShops = ({ toy }) => {
    console.log(toy);

    const { _id, image, name, rating, price } = toy;
    console.log(_id);

    const handleClick = () => {
        toast('View Details clicked!');
      };
      

    return (
        <div className="lg:flex space-x-4 justify-center items-center ">
            <div className="">
                <img className="w-64 h-64 shadow-lg rounded shadow-gray-400 bg-gray-700" src={image} alt="" />
            </div>
            <div className="space-y-3 px-10 sm:pb-5">
                <h2 className="text-2xl px-2 font-bold">{name}</h2>
                <p className="text-xl px-2 font-semibold text-orange-500">Price: ${price}</p>

                <div className="flex items-center px-2">
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                    <span className='ms-2'>{rating}</span>
                </div>

                <div className="pt-2">
                    <Link to={`/toysdetails/${_id}`}>
                        <button className="btn btn-sm btn-outline btn-accent" onClick={handleClick} >View Details
                        
                        </button>
                    </Link>
                </div>
                <ToastContainer />
            </div>
            
        </div>
        
    );
};

export default ToysShops;