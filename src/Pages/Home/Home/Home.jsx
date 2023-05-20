import BlogsPages from "../../BlogsPages/BlogsPages";
import Gallery from "../../Gallery";
import MarketingService from "../../MarketingService/MarketingService";

import ToysShop from "../../Toys/Toys";

import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <ToysShop></ToysShop>
            <BlogsPages></BlogsPages>
            <MarketingService></MarketingService>
            
            
        </div>
    );
};

export default Home;