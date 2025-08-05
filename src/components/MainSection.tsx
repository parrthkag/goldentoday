import AboutGoldenToday from "./AboutGoldenToday";
import BenifitsSection from "./BenifitsSection";
import Hero from "./Hero";
import ProductCarousel from "./ProductCrousel";


const MainSection = () => {
    return (
        <div>
            <Hero/>
            <AboutGoldenToday/>
            <ProductCarousel/>
            <BenifitsSection/>
        </div>
    );
}

export default MainSection