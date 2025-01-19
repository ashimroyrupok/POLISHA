
import ServiceSlider from "./FeaturedSlider";
const Featured = () => {
    return (
      <div className="bg-carbonBG bg-[#19191B] my-16 p-10">
        <div className="h-full   w-full p-2 max-w-7xl mx-auto ">
          {/* featured top */}
          <div className="w-full pt-10 text-center ">
            <h4
              style={{ letterSpacing: "6px" }}
              className="  text-red-600 text-center font-semibold "
            >
              WHAT WE DO
            </h4>
            <h1 className=" text-white  font-bold text-2xl md:text-5xl my-6   ">
              Premium Washing Services
            </h1>
            <p className="text-white  px-6 md:px-40 lg:px-96">
              No or time diam. Now vulputate, how sit amet commodo tincidunt,
              for lorem scelerisque massa, or ultricies.
            </p>
          </div>
          {/* slider */}
          <div className="flex justify-center items-center w-full h-[620px] my-12  ">
            <ServiceSlider />
          </div>
        </div>
      </div>
    );
};

export default Featured;