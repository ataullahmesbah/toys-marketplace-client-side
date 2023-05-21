import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ToyDetailsInfo from "../ToyDetailsInfo";
import useSetTitle from "../../hooks/useSetTitle";


const AllToysInformation = () => {
    const { id } = useParams();
    const [toyDetails, setToyDetails] = useState([]);
    const navigate = useNavigate();
    useSetTitle('Toy Info')

    useEffect(() => {
        const fetchToyDetails = async () => {
            try {
                const response = await fetch(`https://assignment-11-server-side-gray.vercel.app/addtoys/${id}`);
                const data = await response.json();
                setToyDetails(data);
            } catch (error) {
                console.error("Error fetching toy details:", error);
            }
        };

        fetchToyDetails();
    }, [id, navigate]);

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