
import { Helmet } from "react-helmet";
import TopBar from "./TopBar/TopBar";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blood Donation || Home</title>
      </Helmet>
      <TopBar/>
      <h1>Hello Word</h1>
    </div>
  );
};

export default Home;
