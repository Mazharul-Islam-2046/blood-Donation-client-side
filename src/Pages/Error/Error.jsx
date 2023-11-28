import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/CW73XG2/screenshot-www-loudtechie-com-2017-06-27-23-03-46.png')]  h-screen bg-cover flex justify-center items-center">
            <Link className="text-white font-bold font-secondary text-2xl py-4 hover:rounded-none hover:bg-purple-600 rounded-md px-6 bg-gray-800" to="/">Go Home</Link>
        </div>
    );
};

export default Error;