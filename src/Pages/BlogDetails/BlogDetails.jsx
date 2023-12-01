
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer/Footer';
import { useLoaderData } from 'react-router-dom';

import { Helmet } from "react-helmet";

const BlogDetails = () => {
    const blogsDetail = useLoaderData()
    console.log(blogsDetail);
    return (
        <div>
            <Helmet>
        <meta charSet="utf-8" />
        <title>Blood Donation || Blogs Details</title>
      </Helmet>
            <Navbar/>
            <div className='pb-16 px-20'>
                <h2 className='mb-16 mt-8 text-5xl font-bold text-center'>Blog In Details</h2>
                <div className='flex gap-12'>
                <img src={blogsDetail?.image} alt="" />
                <div>
                <h1 className='text-4xl font-bold mb-6'>{blogsDetail?.title}</h1>
                <p className='ml-1 '>{blogsDetail?.blog}</p>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default BlogDetails;