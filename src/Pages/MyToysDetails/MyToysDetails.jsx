

const MyToysDetails = ({ toys }) => {
    const { email, photo, name, seller, price, quantity } = toys;
    return (

        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="" />
                        </div>
                    </div>
                    
                </div>
            </td>
            <td>{name}</td>
            <td>{seller}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th><button className="btn btn-sm btn-outline btn-accent">Update</button></th>
        </tr>

    );
};

export default MyToysDetails;