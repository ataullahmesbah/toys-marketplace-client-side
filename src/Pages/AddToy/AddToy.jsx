import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'


const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToys = event => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const seller = form.seller.value;
    const email = user?.email;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const details = form.details.value;
    form.reset();

    const addToys = {
      name, photo, seller, email, category, quantity, price, rating, details
    }
    console.log(addToys);

    // send to data server
    fetch('http://localhost:5000/addtoys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addToys)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Add Toys added Successfully',
            icon: 'Success',
            confirmButtonText: 'Confirm'
          })
        }
      })

  }
  return (
    <div className="bg-gray-200 p-16 rounded-lg">

<h2 className="text-3xl font-bold text-center text-blue-600 mb-8 shadow-2xl rounded-lg p-5">Add New Toys: Expand Your Collection with Exciting Additions</h2>




      <form onSubmit={handleAddToys}>
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

        {/* Seller name and Seller Email */}
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-sm font-medium text-gray-700">
              Seller Name
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="seller"
              placeholder="Seller Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-sm font-medium text-gray-700">
              Seller Email
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Seller Email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Sub Category and Quantity row */}
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-sm font-medium text-gray-700">
              Sub Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
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
        {/* Price and Rating row */}
        <div className="flex flex-wrap mb-6">
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
              Rating
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
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

        <input type="submit" value="Add Toys" className="btn btn-block hover:bg-green-600 bg-violet-800" />


      </form>
    </div>
  );
};

export default AddToy;