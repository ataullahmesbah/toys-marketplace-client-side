import { useLoaderData } from "react-router-dom";


const ToysDetails = () => {
    const toysDetails = useLoaderData();
    const {name, image, details} = toysDetails;

    return (
        <div>
            <h1>Toy Details Show: {name} </h1>
        </div>
    );
};

export default ToysDetails;