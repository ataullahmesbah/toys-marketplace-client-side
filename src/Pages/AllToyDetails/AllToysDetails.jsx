import { Link } from "react-router-dom";


const AllToysDetails = ({ toy }) => {
    const { _id, seller, price, quantity, name, category } = toy;
    return (
        <tr>
            <td>{seller}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            
            <th>
               <Link to={`/alltoysinformation/${_id}`}>
               <button className="btn btn-sm btn-outline btn-secondary">Details</button>
               </Link>
                </th>
            
        </tr>

    );
};

export default AllToysDetails;