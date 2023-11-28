import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://blood-donation-server-snowy.vercel.app'
})

const useAxiosPublic = () => {
    return [axiosPublic];
};

export default useAxiosPublic;