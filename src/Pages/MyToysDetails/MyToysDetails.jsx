
import { FaTrashAlt, FaUserCircle, FaImages } from 'react-icons/fa';
import { Link } from "react-router-dom";



const MyToysDetails = ({ toys, handleDelete }) => {
    const { _id, email, photo, name, seller, price, quantity } = toys;

    

    return (
        <tr>
            <td>
            <div className="avatar">
                    <div className="rounded-lg w-14 h-14">
                        {photo && <img src={photo} alt="Avatar" />}
                        {!photo && <FaImages className='w-14 h-14' />}
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{seller}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            
            <th>
               <Link to={`/updatetoy/${_id}`}>
               <button className="btn btn-sm btn-outline btn-accent">Update</button>
               </Link>
                </th>
                

            <td><span onClick={() => handleDelete(_id)} className='text-3xl text-red-600 '><FaTrashAlt /></span></td>
        </tr>

    );
};

export default MyToysDetails;