/* eslint-disable react/prop-types */

const MainCard = ({ icon, iconBgColor, title, description }) => {
    return (
      <div className="rounded-md bg-white p-6 gap-5 flex flex-col mb-10 sm:items-start sm:justify-start items-center justify-center">
        <div className="">
          {/* icon */}
          <div
            className={`w-14 h-14 rounded-[15px] items-center justify-center flex ${iconBgColor}`}
          >
            <img src={icon} alt="Icon" className="w-7 h-7" />
          </div>
        </div>
        <span className="font-semibold md:text-base font-Inter sm:text-[24px]">{title}</span>
        <p className="text-sm capitalize md:text-[14px] sm:text-left text-center font-medium font-Inter">{description}</p>
      </div>
    );
  };
  export default MainCard;
  