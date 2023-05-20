import { Link } from "react-router-dom";


const MarketingService = () => {
    return (
        <section className="bg-gray-100 py-12 mt-10 about-section " >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Services
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We offer a wide range of services to meet your animal toy needs.
                    </p>
                </div>
                <div className="mt-10">
                    <div className="flex flex-wrap -mx-4">
                        <div className="md:w-1/2 lg:w-1/3 px-4 mb-8 ">
                            <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200 p-6 lg:h-80">
                                <h3 className="text-xl font-medium text-gray-900">
                                    Toy Selection
                                </h3>
                                <p className="mt-4 text-gray-600">
                                    Browse through our vast collection of animal toys and find the perfect ones for your furry friends. We offer toys for different sizes, breeds, and play styles, ensuring there s something for every pet. Our toys are made from durable materials that are safe for chewing and playing.
                                </p>

                                <Link to='/' className="mt-6 inline-block text-blue-500 hover:text-blue-700">
                                    Explore Toys
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200 p-6 lg:h-80">
                                <h3 className="text-xl font-medium text-gray-900">
                                    Interactive Toys
                                </h3>
                                <p className="mt-4 text-gray-600">
                                    Discover our interactive toys that provide mental stimulation and entertainment for your pets. These toys are designed to engage your furry friends, keeping them active and happy. From puzzle toys to treat-dispensing toys, we have a wide variety to choose from. Interactive toys are great...
                                </p>

                                <Link to='/' className="mt-6 inline-block text-blue-500 hover:text-blue-700">
                                    View Interactive Toys
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200 p-6 lg:h-80">
                                <h3 className="text-xl font-medium text-gray-900 ">
                                    Affiliate Toys Marketplace
                                </h3>
                                <p className="mt-4 text-gray-600">
                                    Explore our affiliate toys marketplace, where you can find a curated selection of high-quality animal toys from trusted brands and vendors. By purchasing through our marketplace, you support us and help provide more valuable content and services for pet owners. We carefully select...
                                </p>
                                <Link to='/' className="mt-6 inline-block text-blue-500 hover:text-blue-700">
                                    Visit Marketplace
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingService;