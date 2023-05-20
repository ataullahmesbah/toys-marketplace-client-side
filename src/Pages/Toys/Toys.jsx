
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToysShops from '../ToysShops/ToysShops';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ToysShop = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [toys, setToys] = useState([]);
    console.log(toys);

    useEffect(() => {
        AOS.init({
          duration: 800,
          offset: 200,
          easing: 'ease-in-out',
          once: true
        });
      }, []);

    useEffect(() => {
        fetch('http://localhost:5000/toysshop')
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, []);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="mt-20 mb-10" data-aos="zoom-in">

<h1 className="text-4xl font-bold text-gray-700 text-center mb-4">Welcome to the Animal Toys Shop</h1>
      <p className="text-lg font-medium text-center text-gray-600 pb-14 p-5">
        Discover a wide range of adorable and playful animal toys. From cuddly plushies to interactive figures, <br /> we offer the perfect companions for your little ones. Click on <span className='font-bold text-gray-700'>View Details</span> <br /> to learn more about each animal toy and
        choose your favorites.
      </p>

            <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
                

                <div className="font-bold text-center text-xl">
                    <TabList>
                        {toys.map((category, index) => (
                            <Tab key={index}>{category.name}</Tab>
                        ))}
                    </TabList>
                </div>

                {toys.map((category, index) => (
                    <TabPanel key={index}>


                        <div className=" bg-white rounded-lg shadow-lg p-8 h-full grid lg:grid-cols-2 mt-10 justify-center  items-center ">
                            {category.toys.map((toy, toyIndex) => <ToysShops

                                key={toyIndex}
                                toy={toy}
                            ></ToysShops>

                            )}

                        </div>

                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default ToysShop;
