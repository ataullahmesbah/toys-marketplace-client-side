import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ToyDetailsInfo from "../ToyDetailsInfo";


const AllToysInformation = () => {
    const { id } = useParams();
    const [toyDetails, setToyDetails] = useState([]);

    useEffect(() => {
        const fetchToyDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/addtoys/${id}`);
                const data = await response.json();
                setToyDetails(data);
            } catch (error) {
                console.error("Error fetching toy details:", error);
            }
        };

        fetchToyDetails();
    }, [id]);

    return (
        <div className="">
            <h1 className="text-center text-4xl font-bold mb-10 text-gray-600">Single Details Information</h1>
            {toyDetails ? (
                <ToyDetailsInfo toyInfo={toyDetails} />
            ) : (
                <p>Loading toy details...</p>
            )}
        </div>
    );
};

export default AllToysInformation;