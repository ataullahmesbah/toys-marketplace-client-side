import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useSetTitle from '../../hooks/useSetTitle';

const UpdateToy = () => {
    const updateToys = useLoaderData();
    useSetTitle('Toy Update')

    const { _id, photo, name, price, quantity } = updateToys;

    const handleUpdateToys = event => {
        event.preventDefault();
        const form = event.target;
    
        const name = form.name.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const details = form.details.value;
        form.reset();
    
        const updateToys = {
          name, photo, quantity, price, details
        }
        console.log(updateToys);
    
        // send to data server
        fetch(`https://assignment-11-server-side-gray.vercel.app/addtoys/${_id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updateToys)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: 'Success!',
                text: 'Toys Updated Successfully',
                icon: 'Success',
                confirmButtonText: 'Confirm'
              })
            }
          })
    
      }

    return (
        <div className="bg-gray-200 p-20 rounded-lg">

      <h1 className="font-bold text-4xl m-10 text-center text-orange-500">Update Toys</h1>

      <form onSubmit={handleUpdateToys} >
        {/* Toy name and photo url */}
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Toys Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Photo URL */}

          <div className="w-full md:w-1/2 px-3">
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

        </div>

        

        {/* Price and Quantity row */}
        <div className="flex flex-wrap mb-6">
           {/* Price*/}
        
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          
       
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Available Quantity"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
       

        <div className="mb-6 p-5">
          <label className="block text-sm font-medium text-gray-700">
            Details
          </label>
          <input
            type="text"
            name="details"
            placeholder="Details"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring"
          />
        </div>

        <input type="submit" value="Update Toys" className="btn btn-block hover:bg-green-600 bg-orange-500" />


      </form>
    </div>
    );
};

export default UpdateToy;