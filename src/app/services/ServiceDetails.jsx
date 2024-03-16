import React from "react";
import { useLocation } from "react-router-dom";
import FeaturesCard from "../../components/cards/FeaturesCard";
import Breadcrumb from "../../breadcrumbs/Breadcrumbs";
import BannerPart from "../../components/services/service-details/BannerPart";
import University from "../University";
import Testimonials from "../Testimonial";
import Map from "../Map";
import "./Hero.css";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SellIcon from "@mui/icons-material/Sell";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import review from "../../assets/reviews.webp";
import trustPilot from "../../assets/trustpilot.webp";
import siteJabber from "../../assets/sidejabbar.webp";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import image from "../../assets/why-we-need.webp";
// import image1 from "../../assets/assignment-infografic.webp";
import Faq from "../../components/services/service-details/Faq";
import { faq } from "../../data/nav";
import SessionCard from "../../components/cards/SessionCard";
import { HiOutlineMail } from "react-icons/hi";
import { BsAlarm } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { AiOutlinePieChart } from "react-icons/ai";
import ar1 from "../../assets/down.webp";
import ar2 from "../../assets/up.webp";
import BuyNowSection from "../../components/services/service-details/BuyNowSection";
import Newsletter from "../../components/containers/Newsletter";
import { options } from "../../data/nav";
import AssignmentForm from "../../common/assignment-form/AssignmentForm";
// import SEO from "../../components/Seo";
import { useParams } from "react-router-dom";
import Image from "next/image";

const ServiceDetails = () => {

  export const generateMetadata = ({ params }) => {
    console.log("Params:", params); // Check the value of params
    // console.log("Options:", options); // Check if options is imported correctly
  
    // Find the option object with the matching name
    const selectedOption = options.find(
      (service) => service.href === params.serviceDetails
    );
    console.log("Selected Option:", selectedOption); // Check if selectedOption is found
  
    // If the option is found, extract its seoTitle
    const title = selectedOption ? selectedOption.seoTitle : "Default Title";
    const description = selectedOption ? selectedOption.seoDescription : "Default Description";
    console.log("Title:", title); // Check the title
  
    return {
      title: title,
      description: description,
    };
  };
  
  return (
    <>
      {/* <SEO
        title={title}
        description={desc}
        schemaStruct={[
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://assignment-guru.com/",
              },
              ...pathnames.map((path, index) => ({
                "@type": "ListItem",
                position: index + 2,
                name: formatRouteParam(path),
                item: `https://assignment-guru.com/${path}`,
              })),
            ],
          },
        ]}
      /> */}
      <div>
        <div className="justify-between bg-white flex flex-col pb-10">
          <div className="banner-section bg-[#fff9f9] py-16 pt-2">
            <div className="mx-auto max-w-screen-xl px-6">
              <div className="mx-auto max-w-screen-xl">
                <Breadcrumb />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                <BannerPart
                  title={bannerTitle}
                  desc={bannerDesc}
                  review={review}
                  trustPilot={trustPilot}
                  siteJabber={siteJabber}
                />
                <AssignmentForm />
              </div>
            </div>
          </div>
          <div className="service-about-section mx-auto py-16 max-w-screen-xl px-6">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="content-part grid gap-3">
                <h4 className="text-2xl  font-semibold text-black">
                  {aboutTitle}
                </h4>
                {/* Inside the service-about-section mapping */}
                {options
                  .filter(
                    (service) => service.label === formatRouteParam(serviceName)
                  )
                  .map((service, index) => {
                    // console.log("service", service); // Add this line
                    return (
                      <React.Fragment key={index}>
                        {service.serviceAboutSectionPara.map(
                          (para, paraIndex) => (
                            <p
                              key={paraIndex}
                              className="text-justify  leading-7 tracking-wide"
                            >
                              {para}
                            </p>
                          )
                        )}
                      </React.Fragment>
                    );
                  })}
              </div>
              <div className="image-part">
                <Image
                  src={aboutImage}
                  // src={aboutt}
                  alt="assignment"
                  title="homework"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
          <div className="service-why-section mx-auto py-12 max-w-screen-xl px-6">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="content-part grid gap-3">
                <h4 className="text-2xl  font-semibold text-black">
                  {whyTitle}
                </h4>
                {/* Inside the service-why-section mapping */}
                {options
                  .filter(
                    (service) => service.label === formatRouteParam(serviceName)
                  )
                  .map((service, index) => {
                    // console.log("service", service); // Add this line
                    return (
                      <React.Fragment key={index}>
                        {service.serviceWhySectionPara.map(
                          (para, paraIndex) => (
                            <p
                              key={paraIndex}
                              className="text-justify  leading-7 tracking-wide"
                            >
                              {para}
                            </p>
                          )
                        )}
                      </React.Fragment>
                    );
                  })}
              </div>
              <div className="image-part">
                <Image
                  src={image}
                  alt="homework"
                  title="assignment"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
          <div className="how-service-works-section relative mx-auto py-16 max-w-screen-xl px-6">
            <h4 className="text-4xl text-center  font-semibold text-black capitalize">
              {howWorksTitle}
            </h4>

            <div className="flex flex-col gap-10 lg:gap-3 mt-8 lg:flex-row justify-center items-center">
              <div className="flex flex-col gap-9 lg:gap-0 lg:flex-row justify-center items-center">
                <SessionCard
                  icon={<HiOutlineMail size={24} />}
                  bgColor="bg-[#FFDCE5]"
                  badgeCount={1}
                  iconColor="#FF1850"
                  title="Connect with Us"
                  desc="Connect with us via email/ WhatsApp"
                />
                <Image
                  loading="eager"
                  src={ar1}
                  alt="ar1"
                  title="ar1"
                  width="100%"
                  height="100%"
                  className="w-20 rotate-90 lg:rotate-0"
                />
              </div>
              <div className="flex flex-col gap-9 lg:gap-0 lg:flex-row justify-center items-center">
                <SessionCard
                  icon={<BsAlarm size={20} />}
                  bgColor="bg-[#EFDEFF]"
                  badgeCount={2}
                  iconColor="#952AFF"
                  title={`Choose your Service`}
                  desc={`Select your desired service\n and upload your queries.`}
                />
                <Image
                  loading="eager"
                  src={ar2}
                  alt="ar1"
                  title="ar1"
                  width="100%"
                  height="100%"
                  className="w-20 rotate-90 lg:rotate-0"
                />
              </div>
              <div className="flex flex-col gap-9 lg:gap-0 lg:flex-row justify-center items-center">
                <SessionCard
                  icon={<CiStar size={24} />}
                  bgColor="bg-[#E0F5E9]"
                  badgeCount={3}
                  iconColor="#1FAF38"
                  title={"Make Payment"}
                  desc={
                    "Receive a price quote based on your\n order and proceed with payment."
                  }
                />
                <Image
                  loading="eager"
                  src={ar1}
                  alt="ar1"
                  title="ar1"
                  width="100%"
                  height="100%"
                  className="w-20 rotate-90 lg:rotate-0"
                />
              </div>
              <div>
                <SessionCard
                  icon={<AiOutlinePieChart size={24} />}
                  bgColor="bg-[#FFDCE5]"
                  badgeCount={4}
                  iconColor="#FF1850"
                  title={"Recieve Solutions"}
                  desc={
                    "Once your payment is done, receive your solutions ahead of the specified deadline."
                  }
                />
                {/* <Image loading="eager" src={ar1} alt="ar1" /> */}
              </div>
            </div>
          </div>
          <div className="feature-section relative mx-auto py-16 max-w-screen-xl px-6">
            <h4 className="text-4xl  text-center font-semibold text-black capitalize">
              Assignment Guru guarantees these features in
              <span className=""> {formatRouteParam(serviceName)} </span>
            </h4>

            <div className="container items-center grid grid-cols-1 gap-6 my-10">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FeaturesCard
                  icon={<HeadphonesOutlinedIcon />}
                  title="24/7 Support"
                  iconClasses="#e3dcff"
                  textColor="#593cc1"
                  description="Around the clock help-when students face homework problems, we are always there."
                />

                <FeaturesCard
                  icon={<AccessAlarmIcon />}
                  title="On time Delivery"
                  iconClasses="#d1f5ea"
                  textColor="#139a74"
                  description="We make sure your work reach you on time because we know if it's not with you on-time, it will be a waste."
                />

                <FeaturesCard
                  icon={<SellIcon />}
                  title="Reasonable Pricing"
                  iconClasses="#ffeeda"
                  textColor="#c28135"
                  description="Our prices are reasonable and pocket-friendly because we understand you better."
                />

                <FeaturesCard
                  icon={<FindInPageOutlinedIcon />}
                  title="100% Plagiarism free Content"
                  iconClasses="#e3dcff"
                  textColor="#593cc1"
                  // description="100% original solutions that reduce the risk of negative marking."
                  description="Get plagiarism free work where each and every assignment is written fro scratch to ensure that no content is plagiarized."
                />
                <FeaturesCard
                  icon={<MonetizationOnOutlinedIcon />}
                  title="Refundable"
                  iconClasses="#d1f5ea"
                  textColor="#139a74"
                  description="Your payment is secured by Paypal and Razorpay, upto 100% money back guarantee."
                />

                {/* <FeaturesCard
              icon={<DonutLargeOutlinedIcon />}
              title="Unlimited Revisions"
              iconClasses="#ffeeda"
              textColor="#c28135"
              description="You get 100% customized work as per your requirements, we are always willing to accommodate."
            /> */}
                <FeaturesCard
                  icon={<MonetizationOnOutlinedIcon />}
                  title="AI-free Assignment"
                  iconClasses="#e3dcff"
                  textColor="#593cc1"
                  description="Our non-AI written assignments, crafted by subject experts, ensure top grades."
                />
                <FeaturesCard
                  icon={<ContentPasteSearchIcon />}
                  title="homework help"
                  iconClasses="#ffdce5"
                  textColor="#ff1850"
                  description="PhD tutors offer unique assistance for flawless homework problem-solving."
                />
                <FeaturesCard
                  icon={<ContentPasteSearchIcon />}
                  title="Confidentiality Assured"
                  iconClasses="#d1f5ea"
                  textColor="#139a74"
                  description="We guarantee the safety of your information from any third party miscreants."
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="/features"
                target="_blank"
                className="cursor-pointer hover:no-underline inline-block rounded-full bg-yellow-dark px-6 lg:px-12 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
              >
                See More Features
              </a>
            </div>
          </div>
        </div>
        <University />
        <Map />
        <Testimonials />
        <BuyNowSection />
        {/* Pass the filtered FAQ to the Faq component */}
        <Faq items={filteredFaq} />
        <Newsletter />
      </div>
    </>
  );
};

export default ServiceDetails;
