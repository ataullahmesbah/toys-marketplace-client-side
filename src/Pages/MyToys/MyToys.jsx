import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
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

    const handleDelete = id => {
        const proceedDel = confirm;
        if(proceedDel){
            fetch(`http://localhost:5000/addtoys/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0 ){
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to delete this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                        }
                      })
                    const remaining = myToys.filter(toys => toys._id !== id);
                    setMyToys(remaining);
                }
            })
        }
    }

    return (
        <div>
            <h3 className='text-4xl font-bold text-center text-gray-600 m-10'>My Toys</h3>

            <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Image</th>
                            <th>Toys Name</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toys => <MyToysDetails
                            key={toys._id}
                            toys={toys}
                            handleDelete={handleDelete}
                            ></MyToysDetails>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default MyToys;