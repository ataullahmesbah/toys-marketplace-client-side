import { Rating } from '@smastrom/react-rating'

const ToyDetailsInfo = ({ toyInfo }) => {

    const { name, photo, seller, email, category, quantity, price, rating, details } = toyInfo;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl grid lg:grid-cols-2 md:grid-cols-1 p-10">
            <figure><img className='w-72 h-72' src={photo} alt="" /></figure>

            <div className="card-body">
                <h2 className="card-title">Toy Name: {name}</h2>
                <h2 className="card-title">Seller Name: {seller}</h2>
                <p><span className='text-xl font-medium'>Email:</span> {email}</p>
                
                    <p><span className='text-xl font-medium'>Price:</span> <span className='text-orange-500 font-semibold text-xl'>${price}</span></p>
                    <p><span className='text-xl font-medium'>Available Quantity:</span> <span className='text-xl'>{quantity}</span></p>

                
                <div className="flex items-center">
                    <span className='font-medium    '>Rating:</span>
                     <Rating className='ms-2' style={{ maxWidth: 100 }} value={rating} readOnly />
                    <span className='ms-2'>{rating}</span>
                </div>
                <p><span className='text-xl font-medium'>Details Description:</span> {details}</p>
                <div className="card-actions justify-end">
                    
                </div>
            </div>

        </div>
    );
};

export default ToyDetailsInfo;