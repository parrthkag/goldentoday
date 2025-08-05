
import AboutGoldenToday from "./AboutGoldenToday";
import AurvedicKit from "./AurvedicKit";
import BenifitsSection from "./BenifitsSection";
import Hero from "./Hero";
import IncomePlan from "./IncomePlan";
import ProductCarousel from "./ProductCrousel";
import Testimonial from "./Testimonial";



const MainSection = () => {
    return (
        <div>
            <Hero/>
            <AboutGoldenToday/>
            <ProductCarousel/>
            <BenifitsSection/>
            <AurvedicKit/>
            <IncomePlan/>
            <Testimonial/>
        </div>
    );
}

export default MainSection