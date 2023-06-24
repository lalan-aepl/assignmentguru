import Divider from "../../common/Divider";

const Banner = () => {
  return (
    <div className="bg-blue-light items-center py-12 ">
      <div className="mx-auto max-w-screen-2xl flex items-center">
        <div className="flex flex-col gap-8 items-center justify-around w-full sm:flex-row sm:justify-around ">
          <div className="flex flex-col sm:flex-row items-center justify-center  gap-10">
            <div className="flex flex-col">
              <p className="text-[35px] text-center divide-x-4 font-Inter font-bold text-white">
                8K+
              </p>
              <span className="text-[19px]  font-medium capitalize text-white text-center">
                success stories
              </span>
            </div>
            <Divider />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center  gap-10">
            <div className="flex flex-col">
              <p className="text-[35px] text-center divide-x-4 font-Inter font-bold text-white">
                200+
              </p>
              <span className="text-[19px]  font-medium capitalize text-white text-center">
                expert instructors
              </span>
            </div>
            <Divider />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center  gap-10">
            <div className="flex flex-col">
              <p className="text-[35px] text-center divide-x-4 font-Inter font-bold text-white">
                108K+
              </p>
              <span className="text-[19px]  font-medium capitalize text-white text-center">
                worldwide students
              </span>
            </div>
            <Divider />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center  gap-10">
            <div className="flex flex-col">
              <p className="text-[35px] text-center divide-x-4 font-Inter font-bold text-white">
                310+
              </p>
              <span className="text-[19px]  font-medium capitalize text-white text-center">
                trendy subjects
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
