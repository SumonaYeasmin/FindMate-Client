
import LatestLostAndFindItems from "../components/LatestLostAndFindItems";

import Slider from "./Slider";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";
import { Helmet } from "react-helmet";


const Home = () => {
    return (
       
   
        <div>
            <Helmet>
                <title>Home | FindMate</title>
            </Helmet>
           <Slider />
           <LatestLostAndFindItems />
           <Testimonial />
           <FAQ />
        </div>
    );
};

export default Home;