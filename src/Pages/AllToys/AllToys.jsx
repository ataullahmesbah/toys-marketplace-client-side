import { useEffect, useState } from "react";
import AllToysDetails from "../AllToyDetails/AllToysDetails";


const AllToys = () => {
    const [allToys, setAllToys]= useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/addtoys')
        .then(res => res.json())
        .then(data => setAllToys(data));
    }, [])
    return (
        <div>
            <h3>All Toys: {allToys.length}</h3>

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
                            ></AllToysDetails> )
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default AllToys;