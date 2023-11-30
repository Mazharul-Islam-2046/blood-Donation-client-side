import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const FeaturedBlogs = () => {
  const { blogs } = useContext(AuthContext);
  console.log(blogs);
  return (
    <div className="pt-20 bg-gray-200 pb-24">
      <h1 className="text-center text-5xl font-bold mt-28 mb-12 text-red-500">
        Popular Blogs
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-20 gap-5">
        {blogs?.slice(0, 2).map((blog, idx) => (
          <div
            key={idx}
            className="bg-white p-6 flex flex-col md:flex-row gap-8"
          >
            <img className="h-44 w-44 object-cover" src={blog?.image} alt="" />
            <div>
              <h3 className="text-2xl font-bold">{blog?.title}</h3>
              <p className="text-lg text-gray-700">{blog?.blog.slice(0, 90)}...</p>
              <button
                className="py-3 px-5 bg-red-600 mt-8 rounded-md ml-1
             text-white hover:bg-gray-800"
              >
                <Link to={`/blogs-details/${blog._id}`}>Read More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-14">
        <button className="bg-red-500 py-2 px-8 rounded-md text-white font-semibold hover:bg-gray-800">
          <Link to="/blogs">All Blogs</Link>
        </button>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
