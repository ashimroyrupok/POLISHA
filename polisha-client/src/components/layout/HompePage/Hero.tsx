import { CarTaxiFront, ChevronRight,  FireExtinguisher, PillBottle, RouteOff } from "lucide-react";
import heroImage from "../../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className=" h-full  py-20 w-full p-4 md:flex justify-center items-center gap-3 ">
        <div className="flex-1 text-center md:text-left">
          <h4
            style={{ letterSpacing: "6px" }}
            className="  text-[16px] text-red-500 font-semibold"
          >
            Modern Equipment
          </h4>
          <h2 className=" text-3xl md:text-5xl font-semibold mt-4  ">
            {" "}
            Professional washing and cleaning of your car
          </h2>
          <p className="my-8 text-opacity-70 pr-3">
            Phasellus in arcu dapibus, lobortis est in, suscipit diam. Vivamus
            faucibus faucibus eros et porttitor. Sed est nulla, tincidunt ac ex
            eget, dictum mollis tortor. Vivamus faucibus nec ipsum id aliquam
            lobortis est.
          </p>
          <h3 className=" text-2xl font-semibold  my-8">
            <span className=""> Call for book:</span>{" "}
            <span className=" text-red-500"> 8-800-10-500</span>
          </h3>

          <div className="flex justify-center md:justify-start">
            <button className="  text-white  transition-all duration-500  flex justify-center  items-center gap-3  font-semibold px-12 py-5 bg-[#E81C2E] rounded-full">
              <span> Read more</span>
              <button
                className=" p-[2px] ml-2   rounded-full border border-white bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronRight className=" size-4" />
              </button>
            </button>
          </div>
        </div>

        <div className=" flex-1  hidden md:block  h-full w-full">
          <img
            className="  h-[510px]  w-[5400px] aspect-auto "
            src={heroImage}
            alt="polisha hero image"
          />
        </div>
      </div>

      {/* hero footer */}
      <div className=" grid grid-cols-2 lg:grid-cols-4 p-2 gap-8 pb-7">
        <div className=" relative p-3  border-r-2  ">
          <CarTaxiFront className="size-20 text-red-500 hover:size-32 " />
          <h2 className="text-xl font-bold my-4 ">Contactless Washing</h2>
          <p className="  text-sm  text-opacity-50 ">
            Vestibulum tortor risus, rutrum at congue sed ultricies finibus
          </p>
        </div>

        <div className=" relative  p-3  border-r-2">
          <PillBottle className="size-20 text-red-500 " />
          <h2 className="text-xl font-bold my-4 ">Safety Materials</h2>
          <p className="  text-sm  text-opacity-50 ">
            Cras aliquam tristique metus, eu gravida diam vestibulum gravida.
          </p>
          <div className=" absolute h-10 z-10 bg-red-500 right-0"> </div>
        </div>

        <div className=" relative p-3 border-r-2 ">
          <FireExtinguisher className="size-20 text-red-500 " />
          <h2 className="text-xl font-bold my-4 ">Modern Equipment</h2>
          <p className="  text-sm  text-opacity-50 ">
            Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam.
          </p>
          <div className=" absolute h-10 z-10 bg-red-500 right-0"> </div>
        </div>

        <div className=" relative  p-3 ">
          <RouteOff className="size-20 text-red-500 " />
          <h2 className="text-xl font-bold my-4 ">Extensive Cleaning</h2>
          <p className="  text-sm  text-opacity-50 ">
            Sestibulum non dolor sit amet mi moles tincidunt vel non velit.
          </p>
          <div className=" absolute h-10 z-10 bg-red-500 right-0"> </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
