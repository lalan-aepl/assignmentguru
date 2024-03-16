// import Image from "next/image";
import "./style.css";

/* eslint-disable react/prop-types */
const BannerPart = ({ title, desc, review, trustPilot, siteJabber }) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold uppercase py-2 lg:leading-[4.5rem]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-dark via-red-500 to-blue-darkBlue">
          {`${title}`}
        </span>
      </h1>
      <h3 className="text-2xl leading-10 ">{desc}</h3>
      <div className="grid gap-5">
        <h6 className="text-sm ">
          Trusted by <b>15k+</b> happy customers
        </h6>
        <div className="grid grid-cols-3 gap-3">
          {[review, trustPilot, siteJabber].map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Image ${index + 1}`}
              title={`Image ${index + 1}`}
              className="w-36"
              width={512}
              height={512}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerPart;
