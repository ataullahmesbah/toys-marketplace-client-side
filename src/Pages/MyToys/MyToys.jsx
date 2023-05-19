import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Providers/AuthProvider';
import MyToysDetails from '../MyToysDetails/MyToysDetails';

const MyToys = () => {
    // const myToys = useLoaderData();
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/addtoys?email=${user?.email}`;
       
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    }, [])
    return (
        <div>
            <h3 className='text-4xl font-bold text-center text-gray-600 m-10'>My Toys</h3>

            <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Toys Name</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Update</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toys => <MyToysDetails
                            key={toys._id}
                            toys={toys}
                            ></MyToysDetails>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default MyToys;