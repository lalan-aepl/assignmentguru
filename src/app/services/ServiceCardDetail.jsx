import Image from "next/image";

/* eslint-disable react/prop-types */
const ServiceCardDetail = ({ title, content, img, alt, position, href }) => {
  return (
    <div className="bg-[#F2F5F9] rounded-[20px] mb-10 p-4">
      <div
        className={`flex flex-col ${
          position === "left" ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-3 justify-between w-full`}
      >
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div>
            <h2 className="text-center text-3xl font-bold font-Nunito">
              {title}
            </h2>
          </div>
          <div>
            <p className="text-center font-normal font-Inter px-10">
              {content}
            </p>
          </div>

          <a
            href={`/services/${href}`}
            className="cursor-pointer hover:no-underline"
          >
            <button
              aria-label="button"
              title="know more btn"
              className="font-medium font-Nunito bg-transparent border-[2px] border-blue-slateBlue px-6 py-3 rounded-full text-blue-slateBlue"
            >
              Know more &gt;
            </button>
          </a>
        </div>

        <div className="w-full">
          <Image
            src={img}
            alt={alt}
            title={alt}
            className="object-fit w-full h-full"
            loading="eager"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCardDetail;
