import React, { useState } from 'react';

const Toys = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      name: 'Math Toys',
      toys: [
        {
          picture: 'https://i.ibb.co/bNX92J0/parts.jpg',
          name: 'Math Toy 1',
          price: 9.99,
          rating: 4.5
        },
        {
          picture: 'https://i.ibb.co/bNX92J0/parts.jpg',
          name: 'Math Toy 2',
          price: 12.99,
          rating: 4.2
        }
      ]
    },
    {
      name: 'Language Toys',
      toys: [
        {
          picture: 'https://i.ibb.co/bNX92J0/parts.jpg',
          name: 'Language Toy 1',
          price: 14.99,
          rating: 4.7
        },
        {
          picture: 'https://i.ibb.co/bNX92J0/parts.jpg',
          name: 'Language Toy 2',
          price: 11.99,
          rating: 4.4
        }
      ]
    },
    {
      name: 'Engineering Toys',
      toys: [
        {
          picture: 'https://i.ibb.co/bNX92J0/parts.jpg',
          name: 'Engineering Toy 1',
          price: 19.99,
          rating: 4.8
        },
        {
          picture: 'https://i.ibb.co/bNX92J0/parts.jpg',
          name: 'Engineering Toy 2',
          price: 16.99,
          rating: 4.6
        }
      ]
    }
  ];

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="shop-by-category">
      <div className="tabs">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabChange(index)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="toys">
        {categories[activeTab].toys.map((toy, index) => (
          <div key={index} className="toy">
            <img src={toy.picture} alt={toy.name} className="toy-image" />
            <div className="toy-details">
              <h3 className="toy-name">{toy.name}</h3>
              <p className="toy-price">${toy.price}</p>
              <p className="toy-rating">Rating: {toy.rating}</p>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toys;
