import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
const ContactUs = () => {
  return (
    <div className="h-[100vh] md:h-[50vw] max-h-[550px] bg-[url('https://c.files.bbci.co.uk/182FF/production/_107317099_blooddonor976.jpg')] bg-cover relative">
      <div className="h-full w-full bg-black opacity-50"></div>
      <div className="absolute text-white top-0 w-full h-full flex justify-center items-center">
        <div className="w-5/6 md:w-4/5 md:h-3/5 border-8 border-red-500 text-center py-8 md:py-16">
          <p className="text-2xl font-semibold">Donate Now</p>
          <p className="mt-6 mb-4 text-3xl md:text-5xl font-bold">
            Call Now:- +011 3455 3455 34
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6">
            <div className="flex justify-center items-center gap-3 text-lg">
              <FaLocationDot />
              <p>1410, Bandar, Narayanganj</p>
            </div>
            <div className="flex justify-center items-center gap-3 text-lg">
              <IoMail />
              <p>blood@Donation.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
