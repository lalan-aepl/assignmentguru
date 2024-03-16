import "./style.css";
import circleOutline from "../../../assets/outline-circle.webp";
import { options } from "../../../data/nav";
import Image from "next/image";

const BuyNowSection = () => {
  return (
    <div className="buy-now-section relative mx-auto py-16 max-w-screen-xl px-6">
      <div className="grid grid-cols-1 lg:flex lg:w-full gap-2">
        <div className="left-side w-3/5 px-6">
          <h3 className="text-4xl  leading-normal font-semibold text-black">
            Online service Help at Affordable Prices: Your Path to Academic
            Success
          </h3>
          <p className="mt-6 text-justify  leading-7 tracking-wide">
            Get exceptional solutions in any domain from our academic writing
            experts. We deliver stellar dissertation writing services for:
          </p>
          <div className="text-2xl  font-semibold text-black grid gap-4 my-6 w-full ml-4 -indent-3">
            Types of Service
            <ul className="grid grid-cols-3 flex-wrap gap-x-4 justify-between w-full ml-2 -indent-3">
              {options.map((service, index) => (
                <li key={index} className="ul-li">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right-side px-5 w-2/5">
          <div
            className="form-display w-full gap-5 grid p-6 rounded-xl bg-white"
            style={{ boxShadow: "0 28px 46px rgba(0,0,0,.1607843137)" }}
          >
            <h4 className="text-2xl text-[#2c2c2c] font-Inter font-bold text-center">
              Place Order Now!
            </h4>
            <div className="listing flex justify-between items-center">
              <div className="left-one flex items-center gap-x-2 text-[#5f5f5f] text-base capitalize">
                <Image
                  src={circleOutline}
                  alt="check"
                  width={20}
                  height={20}
                  className="mb-0"
                  title="outline-circle"
                />{" "}
                Pay As You Go
              </div>
              <div className="right-free flex items-center gap-x-4">
                <p className="capitalize font-Inter text-[#5f5f5f] text-base">
                  Get Custom Price
                </p>
                <p className="text-[#f16700] text-base  capitalize">$</p>
              </div>
            </div>
            <div className="listing flex justify-between items-center">
              <div className="left-one flex items-center gap-x-2 text-[#5f5f5f] text-base capitalize">
                <Image
                  src={circleOutline}
                  alt="check"
                  width={20}
                  height={20}
                  className="mb-0"
                  title="outline-circle"
                />{" "}
                Plagiarism Report
              </div>
              <div className="right-free flex items-center gap-x-4">
                <p className="capitalize line-through font-Inter text-[#5f5f5f] text-base">
                  42 USD/page/year
                </p>
                <p className="text-[#f16700] text-base  capitalize">Free</p>
              </div>
            </div>
            <div className="listing flex justify-between items-center">
              <div className="left-one flex items-center gap-x-2 text-[#5f5f5f] text-base capitalize">
                <Image
                  src={circleOutline}
                  alt="check"
                  width={20}
                  height={20}
                  className="mb-0"
                  title="outline-circle"
                />{" "}
                Title Page
              </div>
              <div className="right-free flex items-center gap-x-4">
                <p className="capitalize line-through font-Inter text-[#5f5f5f] text-base">
                  11 USD
                </p>
                <p className="text-[#f16700] text-base  capitalize">Free</p>
              </div>
            </div>
            <div className="listing flex justify-between items-center">
              <div className="left-one flex items-center gap-x-2 text-[#5f5f5f] text-base capitalize">
                <Image
                  src={circleOutline}
                  alt="check"
                  width={20}
                  height={20}
                  className="mb-0"
                  title="outline-circle"
                />{" "}
                Citations & Referencing
              </div>
              <div className="right-free flex items-center gap-x-4">
                <p className="capitalize line-through font-Inter text-[#5f5f5f] text-base">
                  11 USD
                </p>
                <p className="text-[#f16700] text-base  capitalize">Free</p>
              </div>
            </div>
            <div className="listing flex justify-between items-center">
              <div className="left-one flex items-center gap-x-2 text-[#5f5f5f] text-base capitalize">
                <Image
                  src={circleOutline}
                  alt="check"
                  width={20}
                  height={20}
                  className="mb-0"
                  title="outline-circle"
                />{" "}
                editing & proofreading
              </div>
              <div className="right-free flex items-center gap-x-4">
                <p className="capitalize line-through font-Inter text-[#5f5f5f] text-base">
                  11 USD/page
                </p>
                <p className="text-[#f16700] text-base  capitalize">Free</p>
              </div>
            </div>
            <div className="listing flex justify-between items-center">
              <div className="left-one flex items-center gap-x-2 text-[#5f5f5f] text-base capitalize">
                <Image
                  src={circleOutline}
                  alt="check"
                  width={20}
                  height={20}
                  className="mb-0"
                  title="outline-circle"
                />{" "}
                reworks
              </div>
              <div className="right-free flex items-center gap-x-4">
                <p className="capitalize line-through font-Inter text-[#5f5f5f] text-base">
                  11 USD/page
                </p>
                <p className="text-[#f16700] text-base  capitalize">Free</p>
              </div>
            </div>
            <div className="bottom-section">
              <div className="justify-center flex">
                <div className="text-[#5f5f5f] text-base text-center">
                  Get all those features for <strong> FREE</strong>
                </div>
              </div>
              <div className="mt-4 justify-center flex">
                <a
                  className="text-white font-Inter hover:no-underline bg-[#f16700] rounded-md flex justify-center items-center text-lg px-7 py-2"
                  href="/contact"
                  target="_blank"
                >
                  Place Order Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowSection;
