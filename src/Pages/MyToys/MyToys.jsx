import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysDetails from '../MyToysDetails/MyToysDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useSetTitle from '../../hooks/useSetTitle';
import { useNavigate } from 'react-router-dom';

const MyToys = () => {
 
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    useSetTitle('My Toys')
    const navigate = useNavigate();

    const url = `https://assignment-11-server-side-gray.vercel.app/addtoys?email=${user?.email}`;


    useEffect(() => {
        AOS.init({
          duration: 800,
          offset: 200,
          easing: 'ease-in-out',
          once: true
        });
      }, []);
       
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    }, [navigate])

    const handleDelete = id => {
        
        
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
                        
                            fetch(`https://assignment-11-server-side-gray.vercel.app/addtoys/${id}`, {
                                method: 'DELETE',
                            })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if(data.deletedCount > 0 ){
                        
                        
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
    

    return (
        <div data-aos="zoom-in">
           
<h2 className="text-yellow-500 text-center text-2xl font-semibold mb-10 bg-gray-800 p-4 rounded-lg shadow-md w-2/3 mx-auto">My Themed Toys: Explore Our Collection of Fun and Playful Animal Toys</h2>

            <table className="table w-full">
                    
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