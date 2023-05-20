import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Gallery = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  useEffect(() => {
    fetch('gallery.json')
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.error('Error fetching toys data:', error));
  }, [])
  return (
    <div className='mt-10 mb-10' data-aos="fade-up">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to the Dreamy Daze <br /> Toys Gallery</h1>
      <p className="text-sm p-5 text-center text-gray-700">
        Explore our wide collection of adorable and playful animal toys. Our gallery showcases a diverse range of
        animal-inspired <br /> toys that are perfect companions for kids of all ages. From cuddly stuffed animals to
        interactive figures, our toys <br /> encourage imaginative play and offer endless hours of fun. Each toy is carefully
        designed to capture the unique <br /> characteristics of various animals, allowing children to learn about different
        species while having a blast. Whether <br /> you are searching for a soft and huggable companion or an educational toy
        that sparks curiosity, <br /> our animal toys are sure to delight. Choose your favorites and embark on exciting <br />
        adventures with our charming animal companions!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 m-10">
        {toys.map((toy, index) => (
          <div key={index} className="relative">
            <img src={toy.image} alt={`Image ${index + 1}`} className="w-full h-64 lg:h-72 rounded-lg overflow-hidden shadow-lg" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-75 text-white text-center">
              <p className="text-lg font-semibold">{toy.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
