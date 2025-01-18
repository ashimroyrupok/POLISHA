import BannerSlider from "@/components/layout/HompePage/Banner";
import Hero from "@/components/layout/HompePage/Hero";
import Navbar from "@/components/layout/Shared/Navbar";

const Home = () => {
    return (
      <div>
        <Navbar />
        <BannerSlider/>
        <Hero/>
      </div>
    );
};

export default Home;