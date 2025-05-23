
import LatestLostAndFindItems from "../components/LatestLostAndFindItems";
import { motion } from "framer-motion";
import Slider from "./Slider";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";
import { Helmet } from "react-helmet";
import HowItWorks from "../components/HowItWorks";
import CTASection from "./CTASection/CTASection";



const Home = () => {
    return (

        <div>
            <Helmet>
                <title>Home | FindMate</title>
            </Helmet>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Slider />
            </motion.div>
            <LatestLostAndFindItems />
            <Testimonial />
            <HowItWorks></HowItWorks>
            <FAQ />
            <CTASection></CTASection>
        </div>
    );
};

export default Home;