import Gallery from "../../Gallery";
import MyToys from "../../MyToys/MyToys";
import ToysShop from "../../Toys/Toys";

import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <ToysShop></ToysShop>
            <MyToys></MyToys>
            
        </div>
    );
};

export default Home;