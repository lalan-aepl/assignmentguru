import React from "react";
import { useParams } from "react-router-dom";
import BannerPart from "../../components/services/service-details/BannerPart";
import "./Hero.css";
import review from '../../assets/reviews.webp'
import trustPilot from "../../assets/trustpilot.webp";
import siteJabber from "../../assets/sidejabbar.webp";
import image from "../../assets/why-we-need.webp";
import { options } from "../../data/nav";
import AssignmentForm from "../../common/assignment-form/AssignmentForm";
const Page = () => {
  const params = useParams();
  const serviceSlug = params.slug;
  const serviceDetails = serviceSlug

  const formatRouteParam = (serviceName) => {
    return serviceName.replace(/-/g, " ").replace(/%20/g, " ");
  };
  const filteredOptions = options.filter(
    (service) =>
      service.label === formatRouteParam(serviceSlug)
  );
  const currentServiceOption = filteredOptions[0];
  const aboutImage = currentServiceOption.aboutImage || "";
  // console.log(aboutImage, "aboutImage");
  const bannerTitle =
    currentServiceOption.bannerTitle || formatRouteParam(serviceDetails); 
  const bannerDesc =
    currentServiceOption.bannerDesc ||
    "Revolutionize your career with online homework \n help available today!"; // Assuming you have an aboutImage property in your options
  const whyTitle =
    currentServiceOption.whyTitle || "Why you need this particular section";
  const aboutTitle = currentServiceOption.aboutTitle || (
    <>
      Assignment Guru{" "}
      <span className="capitalize">{formatRouteParam(serviceDetails)}</span> -
      One place for best quality{" "}
      <span className="capitalize">{formatRouteParam(serviceDetails)}</span>
    </>
  );
  // const howWorksTitle = currentServiceOption.howWorksTitle || (
  //   <>How {formatRouteParam(serviceDetails)} works</>
  // );

  return (
    <>
      <div className="py-5">
        <div className="justify-between bg-white flex flex-col py-20">
          <div className="banner-section bg-[#fff9f9] py-16 pt-2">
            <div className="mx-auto max-w-screen-xl px-6">
              <div className="mx-auto max-w-screen-xl">
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
                    (service) =>
                      service.label === formatRouteParam(serviceDetails)
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
                <img
                  src={aboutImage}
                  // src={aboutt}
                  alt="assignment"
                  title="homework"
                  width={512}
                  height={512}
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
                    (service) =>
                      service.label === formatRouteParam(serviceDetails)
                  )
                  .map((service, index) => {
                    // console.log("service", service); // Add this line
                    return (
                      <React.Fragment key={index}>
                        {service.serviceWhySectionPara.map(
                          (para, paraIndex) => (
                            <p
                              key={paraIndex}
                              className="text-justify leading-7 tracking-wide"
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
                <img
                  src={image}
                  alt="homework"
                  title="assignment"
                  width={512}
                  height={512}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
