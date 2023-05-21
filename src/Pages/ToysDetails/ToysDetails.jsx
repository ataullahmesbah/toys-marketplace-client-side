import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToysDetails = () => {
  const { id } = useParams();
  const [toyInfo, setToyInfo] = useState(null);

  useEffect(() => {
    const fetchToyDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/toysshop/${id}`);
        const data = await response.json();
        setToyInfo(data);
      } catch (error) {
        console.error('Error fetching toy details:', error);
      }
    };

    fetchToyDetails();
  }, [id]);

  if (!toyInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{toyInfo.name}</h2>
      <p>Price: ${toyInfo.price}</p>
      <p>Rating: {toyInfo.rating}</p>
      <img src={toyInfo.image} alt={toyInfo.name} />
      <p>{toyInfo.details}</p>
    </div>
  );
};

export default ToysDetails;
