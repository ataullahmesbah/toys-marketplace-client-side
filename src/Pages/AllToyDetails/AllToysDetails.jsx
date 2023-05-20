import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllToysDetails = ({ toy }) => {
  const { _id, seller, price, quantity, name, category } = toy;

  const handleDetailsClick = () => {
    toast.info('Viewing toy details...');
  };

  return (
    <tr>
      <td>{seller}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>

      <th>
        <Link to={`/alltoysinformation/${_id}`}>
          <button
            className="btn btn-sm btn-outline btn-secondary"
            onClick={handleDetailsClick}
          >
            Details
          </button>
        </Link>
      </th>
      <ToastContainer /> {/* Place ToastContainer outside of <tr> */}
    </tr>
  );
};

export default AllToysDetails;
