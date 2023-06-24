import downloadImage from "../assets/download.png";
import google from "../assets/google.svg";
import { AiFillApple } from "react-icons/ai";
import phone from "../assets/phone.gif"

const Download = () => {
  const bgstyles = {
    backgroundImage: `url(${downloadImage})`,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section
      className="bg-primaryWhite relative overflow-hidden"
      aria-label="download feature section"
    >
      <div className="text-white" style={bgstyles}>
        <div className="mx-auto max-w-screen-xl ">
          <div className="py-6 sm:py-12 sm:px-0 px-10">
            <div className="sm:px-10 flex flex-col">
              <p className="font-bold font-QuickSand text-3xl sm:text-[39px] capitalize sm:tracking-[2px] sm:leading-[39px] mb-3">
                instant & dedicated whatsapp support
              </p>
              <p className="font-[300] text-sm font-QuickSand leading-[20px] capitalize sm:leading-[29px] mb-3">
                Real-time tools and rich insights mean our support solution
                amplifies your team for
                <br /> an unbeatable experience.
              </p>
              {/* <p className="text-sm font-QuickSand sm:text-lg capitalize sm:leading-[39px] mb-3">
                Get the App
              </p> */}
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 ">
                {/* <button className="ring-0 p-2 xl:px-8 xl:py-4 bg-black transition rounded-md hover:bg-black/75 focus:ring-red-100 capitalize flex items-center gap-2">
                  <img src={google} alt="icon" className="w-8" />
                  <span className="flex flex-col">
                    <span className="uppercase text-[10px] text-left font-bold font-Inter">
                      download on
                    </span>
                    <span>Google Playstore</span>
                  </span>
                </button> */}
                {/* <button className="ring-0 p-2 xl:px-8 xl:py-4 bg-black transition rounded-md hover:bg-black/75 focus:ring-red-100 capitalize flex items-center gap-2">
                  <AiFillApple size={30} color="white" />
                  <span className="flex flex-col">
                    <span className="uppercase text-[10px] text-left font-bold font-Inter">
                      get it on
                    </span>
                    <span>Google Applestore</span>
                  </span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[34rem] top-[6rem] xl:left-[58rem] xl:top-[7rem] lg:left-[38rem] xs-hidden">
          {/* <div className="circle rounded-full h-24 w-24 sm:h-32 sm:w-32 bg-violet-main flex flex-col justify-center items-center text-center relative lg:-left-16 lg:top-14 md:-left-16 md:top-16">
            <span className="font-QuickSand font-bold sm:text-[40px]">98%</span>
            <span className="text-[15px] font-QuickSand font-light leading-0 text-center">
              satisfied
              <br />
              customers
            </span>
          </div> */}

          <div className=" rounded-full h-32 w-32 sm:h-48 sm:w-48 bg-green-garden flex flex-col p-2 items-center text-center">
            <span className="font-QuickSand font-bold sm:text-[30px]">
              4.5/5
            </span>
            <span className="text-[15px] font-QuickSand font-light leading-0 text-center">
              clients rate on
              <br />
             Assignment Guru
            </span>
          </div>
        </div>
        <div className="absolute left-[34rem] top-[0rem] xl:left-[57rem] xl:top-[-12rem] lg:left-[38rem]">
          <img src={phone} alt="phone-gif" className="absolute hidden xl:block xl:right-0 xl:top-0 xl:mt-4 xl:w-full" />
        </div>
      </div>
    </section>
  );
};

export default Download;
