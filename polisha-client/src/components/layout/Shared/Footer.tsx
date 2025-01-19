import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-carbonBG bg-[#19191B] mt-16 pt-10 ">
      <div className=" max-w-7xl mx-auto text-center text-white ">
        {/* footer top */}
        <h2 className=" text-[#E81C2E] font-bold my-4">POLISHA</h2>
        <p className="  text-gray-300 text-opacity-50 my-6 px-6 md:px-40 lg:px-96">
          Even consequat sem ullamcorper, euismod metus sit amet, tristique
          justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.
        </p>

        <div className=" mt-16 flex flex-col md:flex-row justify-center items-center gap-7 md:gap-24 ">
          <div className="flex group flex-col items-center justify-center">
            <PhoneCall className="size-9 text-pRed group-hover:text-white" />
            <p className=" text-sm font-semibold my-2">01xxxxxxxxx</p>
            <h4 className=" text-pRed font-semibold text-sm">
              Ulipur, Kurigram
            </h4>
          </div>

          <div className="flex group flex-col items-center justify-center">
            <MapPin className="size-9 text-pRed group-hover:text-white" />
            <p className=" font-semibold my-2">Car washing point</p>
            <h4 className="   text-sm">Ulipur, Kurigram</h4>
            <p className="  text-sm my-2">KC road,Ulipur</p>
          </div>

          <div className="flex group flex-col items-center justify-center">
            <Mail className="size-9 text-pRed group-hover:text-white" />
            <p className=" text-sm font-semibold my-2">
              ashimroyrupok@gmail.com
            </p>
            <p className=" text-sm font-semibold ">ashimxxxxx@gmail.com</p>
          </div>

          <div className="flex group flex-col items-center justify-center">
            <Clock className="size-9 text-pRed group-hover:text-white" />
            <p className=" text-sm font-semibold my-2">
              {" "}
              <span className=" text-pRed ">Mon-Sat :</span> 7:00-22:00{" "}
            </p>
            <h4 className=" text-pRed font-semibold text-sm">
              Ulipur, Kurigram
            </h4>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <h3 className=" bg-[#0F0F10] bg-opacity-50 mt-10 text-white p-5 text-center font-semibold">
        {" "}
        Like-themes © All Rights Reserved - 2020 - Purchase{" "}
      </h3>
    </div>
  );
};

export default Footer;
