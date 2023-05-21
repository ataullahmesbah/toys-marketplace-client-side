import { useEffect, useState } from "react";
import AllToysDetails from "../AllToyDetails/AllToysDetails";
import useSetTitle from "../../hooks/useSetTitle";


const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [searchName, setSearchName] = useState("");
    useSetTitle('All Toys')

    useEffect(() => {
        fetch('https://assignment-11-server-side-gray.vercel.app/addtoys')
            .then(res => res.json())
            .then(data => setAllToys(data.slice(0, 20)));
    }, [])

    const handleSearch = () => {
        fetch(`https://assignment-11-server-side-gray.vercel.app/toySearchByTitle/${searchName}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllToys(data);
            });
    };

    

    return (
        <div>
            <h3 className="text-4xl text-center font-bold  mb-10">All Toys</h3>


            <div className="p-5">
            <div className="form-control w-full max-w-xs grid grid-cols-2 items-center gap-4 mx-auto ">
                
                <input
                    onChange={(e) => setSearchName(e.target.value)}
                    type="text"
                    placeholder="Search Toy" className="input input-bordered w-full max-w-xs" />

                {" "}
                <div className="">
                <button className="btn btn-outline btn-sm btn-secondary" onClick={handleSearch}>Search</button>
                </div>
                
            </div>
            </div>

            <table className="table w-full">

                <thead>
                    <tr>

                        <th>Seller Name</th>
                        <th>Toys Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Details</th>


                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allToys.map(toy => <AllToysDetails
                            key={toy._id}
                            toy={toy}
                        ></AllToysDetails>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;