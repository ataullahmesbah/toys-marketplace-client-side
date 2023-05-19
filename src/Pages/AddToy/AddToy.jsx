import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const AddToy = () => {
  const {user} = useContext(AuthContext);
    return (
        <div>

            <form>
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
        defaultValue={user?.name}
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

  {/* Category and details row */}
  <div className="flex flex-wrap mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block text-sm font-medium text-gray-700">
        Category
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
        Details
      </label>
      <input
        type="text"
        name="details"
        placeholder="Details"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  </div>

  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700">
      Photo URL
    </label>
    <input
      type="text"
      name="photo"
      placeholder="Photo URL"
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring"
      />     
                </div>

                <input type="submit" value="Add Toys" className="btn btn-block bg-[#D2B48C]" />


            </form>
        </div>
    );
};

export default AddToy;