import LatestLostAndFindItems from "../components/LatestLostAndFindItems";
import CallToAction from "./CallToAction";
import Slider from "./Slider";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
           
           <Slider />
           <LatestLostAndFindItems />
           <Testimonial />
           <CallToAction />
        </div>
    );
};

export default Home;