// import CustomButton from "../buttons/CustomButton";
import { BsFillPlayFill } from "react-icons/bs";
import hero from "../../assets/banner-2.svg";
import flower from "../../assets/flower.svg";

const Hero = () => {
  // const bgstyles = {
  //   backgroundImage: `url(${hero})`,
  //   backgroundSize: "contain",
  //   backgroundPosition: "10%",
  //   backgroundRepeat: "no-repeat",
  //   height: "100vh",
  // };

  return (
    <section className="bg-primaryWhite">
      <div className="mx-auto max-w-screen-2xl lg:max-w-screen-xl px-4 py-24 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1  pt-8 lg:grid-cols-2 lg:pt-16">
          <div className=" lg:order-last">
            <img
              alt="Party"
              src={hero}
              className="object-contain h-64 lg:h-96 md:h-80 md:w-full lg:w-full xl:h-full xl:mt-0 lg:mt-20 md:mt-10"
            />
          </div>
          <div className=" sm:pt-10">
            <div className="py-10">
              <div className="flex gap-2 mb-4 items-center sm:flex-row sm:gap-3">
                <span className="capitalize text-[#D7A74A] font-Inter font-semibold text-sm ">
                  100% satisfaction guarantee
                </span>
              </div>
              <h1 className="text-4xl leading-[50px] font-normal capitalize lg:text-[48px] lg:leading-[60px] xl:text-[62px] xl:leading-[85px] mb-8">
                get quality{" "}
                <span className="relative font-bold">
                  Tutoring
                  <img
                    src={flower}
                    alt="flower"
                    className="h-10 object-cover absolute top-0 -right-6"
                  />
                </span>
                <strong>
                  <br /> through Assignment {"Guru's"}
                </strong>
                <br /> online tutoring
              </h1>

              <p className="mt-4 text-black font-Inter font-medium mb-12">
              Unlock Your Academic Success with Assignment {"Guru's"} Expert Assistance! 
  
              </p>

              <div className="mb-6 flex flex-col gap-10 sm:flex-row sm:gap-6">
              <a
            href="#contact"
            className="inline-block rounded-full bg-gradient-to-r from-[#FF7714] to-[#FFCF59]  px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            Join Course
          </a>
                <div className="flex flex-row gap-3 items-center sm:only:justify-center">
                  <a
                    href="#session"
                    className="inline-block rounded-full bg-blue-main p-3 text-sm font-medium text-white transition hover:bg-blue-darkBlue focus:outline-none "
                  >
                    <BsFillPlayFill size={25} />
                  </a>
                  <span className="font-bold text-Inter capitalize">
                    see how it works?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
