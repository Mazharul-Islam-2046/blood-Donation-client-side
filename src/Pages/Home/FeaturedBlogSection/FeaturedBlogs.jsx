import { Link } from "react-router-dom";

const FeaturedBlogs = () => {
  return (
    <div className="pt-20 bg-gray-200 pb-24">
      <h1 className="text-center text-5xl font-bold mt-28 mb-12 text-red-500">Popular Blogs</h1>
      <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-20 gap-5">
        <div className="bg-white p-6 flex flex-col md:flex-row gap-8">
          <img className="h-44 w-44 object-cover" src="https://i.ibb.co/0YMYq2J/sbv-HNo-N3-KYdvj-JUXz-FPi-D.png" alt="" />
          <div>
            <div>
              <p className="text-gray-800 text-lg font-semibold">2002,12,12</p>
            </div>
            <h3 className="text-2xl font-bold">Free Group Checking</h3>
            <p className="text-lg text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              veritatis delectus impedit officia quas ratione nobis obcaecati,
              tempora praesentium dolore, tenetur maiores, facilis expedita
              blanditiis quasi. Aut soluta eveniet dicta!
            </p>
            <button className="py-3 px-5 bg-red-600 mt-8 rounded-md ml-1
             text-white">
              <Link>Read More</Link>
            </button>
          </div>
        </div>
        <div className="bg-white p-6 flex flex-col md:flex-row gap-8">
          <img className="h-44 w-44 object-cover" src="https://i.ibb.co/0YMYq2J/sbv-HNo-N3-KYdvj-JUXz-FPi-D.png" alt="" />
          <div>
            <div>
              <p className="text-gray-800 text-lg font-semibold">2002,12,12</p>
            </div>
            <h3 className="text-2xl font-bold">Free Group Checking</h3>
            <p className="text-lg text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              veritatis delectus impedit officia quas ratione nobis obcaecati,
              tempora praesentium dolore, tenetur maiores, facilis expedita
              blanditiis quasi. Aut soluta eveniet dicta!
            </p>
            <button className="py-3 px-5 bg-red-600 mt-8 rounded-md ml-1
             text-white">
              <Link>Read More</Link>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturedBlogs;
