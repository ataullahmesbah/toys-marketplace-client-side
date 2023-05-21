import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Rating } from '@smastrom/react-rating'
import useSetTitle from '../../hooks/useSetTitle';

const ToysDetails = () => {
  const { id } = useParams();
  const [toyInfo, setToyInfo] = useState(null);
  const Navigate = useNavigate();
 useSetTitle('Toys Details')
  useEffect(() => {

    fetch(`https://assignment-11-server-side-gray.vercel.app/toysshop/${id}`)
      .then(res => res.json())
      .then(data => setToyInfo(data))

      .catch(error => {
        console.error('Error fetching toy details:', error);
      })

  }, [id, Navigate]);

  if (!toyInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className='py-10'>

      <div className="justify-center items-center p-10">

        <img className='mx-auto w-96 h-96 rounded-lg' src={toyInfo.image} />
      </div>
      <div className=" mx-10 border p-10 rounded-lg bg-gray-200">
        <div className="space-y-3">
        <h2><span className='text-xl font-semibold font-serif'>Toy Name:</span> <span className='font-medium'>{toyInfo.name}</span></h2>
        <p><span className='text-xl font-semibold font-serif'>Price:</span> <span className='text-orange-600 font-medium'>${toyInfo.price}</span></p>
        <div className="flex items-center">
          <span className='font-medium    '>Rating:</span>
          <Rating className='ms-2' style={{ maxWidth: 100 }} value={toyInfo.rating} readOnly />
          <span className='ms-2'>{toyInfo.rating}</span>
        </div>
        <p><span className='text-xl font-semibold font-serif'>Description: </span>{toyInfo.details}</p>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
