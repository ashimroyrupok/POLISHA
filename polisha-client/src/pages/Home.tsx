import BannerSlider from "@/components/layout/HompePage/Banner";
import Featured from "@/components/layout/HompePage/Featured";
import Footer from "@/components/layout/Shared/Footer";
import Hero from "@/components/layout/HompePage/Hero";
import Navbar from "@/components/layout/Shared/Navbar";

const Home = () => {
    return (
      <div>
        <Navbar />
        <BannerSlider/>
        <Hero/>
        <Featured/>
        <Footer/>
      </div>
    );
};

export default Home;