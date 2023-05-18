

const ToysShops = ({toy}) => {

    const {image, name, rating, price } = toy;
    return (
        <div className="lg:flex space-x-4 justify-center items-center ">
        <div className="">
        <img className="w-64 h-64 shadow-lg rounded shadow-gray-400 bg-gray-700" src={image} alt="" />
        </div>
        <div className="space-y-2 px-10 sm:pb-5">
        <h2 className="text-2xl px-2 font-bold">{name}</h2>
        <p className="text-xl px-2 font-semibold text-orange-500">Price: ${price}</p>
        <p className="px-2">{rating}</p>
        <button className="btn btn-sm btn-outline btn-accent">View Details</button>
        </div>



        </div>
    );
};

export default ToysShops;