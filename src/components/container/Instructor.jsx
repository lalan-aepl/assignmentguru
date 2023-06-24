import bg1 from "../../assets/redbg.png";
import bg2 from "../../assets/greenbg.png";

const Instructor = () => {
  const bgstyles1 = {
    backgroundImage: `url(${bg1})`,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
  };
  const bgstyles2 = {
    backgroundImage: `url(${bg2})`,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      aria-label="instructors"
      className="bg-primaryWhite sm:pb-24 pb-20"
    >
      <div className="mx-auto max-w-screen-xl py-0 sm:py-16">
        <div className="flex px-6 flex-col items-center gap-8 sm:gap-6 sm:justify-center xl:flex-row sm:ml-0">
        <div className="card1">
            <div
              className="card rounded-md w-[360px] sm:w-[530px] sm:h-80 p-4 sm:p-6 flex justify-center flex-col gap-2"
              style={bgstyles1}
            >
              <span className="text-[#30BEAD] capitalize text-base font-Inter font-semibold">
                build your career
              </span>
              <h3 className="font-medium font-Inter text-xl mt-2">
                Become An <span className="text-red-400">Instructor</span>{" "}
              </h3>
              <p className="capitalize text-sm mt-4 mb-6 text-[#ccc] font-Inter">
                learn at you own pace, move the
                <br /> between multiple courses
              </p>

              <button className="bg-red-400 text-white font-bold ring-0 rounded px-4 sm:px-2 sm:py-4 py-4 w-1/2">
                Apply Now
              </button>
            </div>
          </div>
          <div className="card2">
            <div
              className="card rounded-md w-[360px] sm:w-[530px] sm:h-80 p-4 sm:p-6 flex justify-center flex-col gap-2"
              style={bgstyles2}
            >
              <span className="text-[#30BEAD] capitalize text-base font-Inter font-semibold">
                build your career
              </span>
              <h3 className="font-medium font-Inter text-xl mt-2">
                Get Free <span className="text-red-400">Courses</span>{" "}
              </h3>
              <p className="capitalize text-sm mt-4  mb-6 text-[#ccc] font-Inter">
                learn at you own pace, move the
                <br /> between multiple courses
              </p>

              <button className="bg-black text-white font-bold ring-0 rounded px-4 sm:px-3 sm:py-4 py-4 w-1/2">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
