import sideImage from "../assets/group1.svg";
import line from "../assets/line.svg";
// import CustomButton from "../components/buttons/CustomButton";

const Schedule = () => {
  return (
    <section className="bg-primaryWhite">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-12 px-8 sm:px-6 lg:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <div className="lg:order-last">
            <img alt="Party" src={sideImage} className=" object-cover" />
          </div>

          <div className="w-full">
            <h4 className="font-[400] font-Inter uppercase text-xl sm:text-[19px] sm:leading-[22px] text-[#D7A74A] mb-6">
              customize with your schedule
            </h4>
            <div className="mb-8">
              <span className="text-3xl font-Nunito sm:text-[44px] sm:leading-[66px] capitalize">
                {" "}
                personalized <strong>professional</strong> <br />
                online tutor on your{" "}
              </span>
              <span className="relative font-Nunito text-3xl sm:text-[44px] sm:leading-[66px]">
                <strong>Schedule</strong>
                <div className="">
                  <img
                    src={line}
                    alt="line"
                    className="absolute h-[6px] left-4 top-12"
                  />
                  <img
                    src={line}
                    alt="line"
                    className="absolute h-[6px] left-4"
                  />
                </div>
              </span>
            </div>

            <p className="mt-4 text-black sm:leading-[30px] sm:text-[20px] text-base font-[500] text-justify mb-8">
              our scheduling system allows for careful decision making in terms
              of time and student suitability, with our tutors available in a
              variety of time slots entirely designed around each student’s
              individual pace.
            </p>

            <a
            href="#about"
            className="inline-block rounded-full bg-gradient-to-r from-[#FF7714] to-[#FFCF59]  px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            Learn more
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
