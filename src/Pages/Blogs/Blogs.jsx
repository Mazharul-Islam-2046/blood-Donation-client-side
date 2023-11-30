
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer/Footer";


const Blogs = () => {
    const blogs = useLoaderData()
    const publishedBlogs = blogs.filter((blog)=> blog.status === "publish")
    return (
        <div>
            <Navbar/>
            <div className="bg-gray-600 py-24">
            <h1 className='text-4xl font-bold text-center mb-16 text-white'>All Blogs</h1>
            <div className="grid grid-cols-2 px-16 gap-5 py-2">
                { publishedBlogs.map((publishedBlog)=> (<div key={publishedBlog._id} className="bg-white p-6 flex flex-col md:flex-row gap-8">
                    <img className="h-44 w-44 object-cover" src={publishedBlog.image} alt="" />
                    <div>
                      <div>
                        <p className="text-gray-800 text-lg font-semibold">2002,12,12</p>
                      </div>
                      <h3 className="text-2xl font-bold">{publishedBlog.title}</h3>
                      <p className="text-lg text-gray-700">
                        {publishedBlog.blog.slice(0, 80)}
                      </p>
                      <button className="py-3 px-5 bg-red-600 mt-8 rounded-md ml-1
                       text-white">
                        <Link to={`/blogs-details/${publishedBlog._id}`}>Read More</Link>
                      </button>
                    </div>
                  </div>))
                    
                }
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Blogs;