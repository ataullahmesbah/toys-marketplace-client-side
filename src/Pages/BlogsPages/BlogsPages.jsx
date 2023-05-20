import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BlogsPages = () => {

    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(response => response.json())
            .then(data => setBlog(data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div className="">
            <h2 className="text-4xl font-bold mb-6 text-center text-orange-600 pt-10">Our Latest Blogs</h2>
            <p className="text-center text-gray-700 font-serif mb-10">Discover a World of Joy: Explore Our Delightful Collection of Animal Toys. <br /> Immerse yourself in a world of wonder and delight with our captivating <br /> collection of animal toys.</p>

            <div className="bg-gray-100 rounded-lg">
                <div className="container mx-auto px-4 py-8">
                    <section className="my-4">

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">


                            {blog.map((blog) => (
                                <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                                    <img src={blog.image} className="w-full h-96" alt="" />

                                    <div className="p-4">
                                        <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                                        <p className="text-gray-600 mb-4">{blog.description}</p>
                                        <Link to='/' className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 ">
                                            Read More </Link>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default BlogsPages;