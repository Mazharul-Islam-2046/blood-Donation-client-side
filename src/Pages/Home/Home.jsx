
import { Helmet } from "react-helmet";
import TopBar from "./TopBar/TopBar";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import FeaturedBlogs from "./FeaturedBlogSection/FeaturedBlogs";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blood Donation || Home</title>
      </Helmet>
      <TopBar/>
      <Navbar/>
      <HeroSection/>
      <FeaturedBlogs/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Home;
