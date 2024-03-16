import banner from "../../assets/banner-tip-under.webp";
import serv from "../../assets/service-offers.webp";
import Faq from "@/components/services/service-details/Faq";
import { faq } from "@/data/nav";
import MainCard1 from "@/components/cards/MainCard1";
import writingFull from "../../assets/assignment.webp";
// import playPauseMic from "../assets/service.jpg";
import video from "../../assets/video.webp";
import testQuiz from "../../assets/test.webp";
import ProjectLab from "../../assets/project.webp";
import AssignmentForm from "@/common/assignment-form/AssignmentForm";
import presentation from "../../assets/presentation.svg";
import homework from "../../assets/homework.svg";
import programming from "../../assets/programming.svg";
import gameDevelop from "../../assets/game-develop.svg";
import bibliography from "../../assets/bibliography.svg";
import About from "@/pages/About";
import SEO from "../../components/Seo";
import Image from "next/image";

export const metadata = {
  title: "Expert 24/7 Academic Help Services for all Students | Assignment Guru",
  description:
    "Discover a range of academic help services at Assignment Guru. From personalized tutoring to academic support, we are dedicated to elevating learning excellence.",
};

const services = [
  // homework-service
  {
    id: 0,
    href: "/services/homework",
    image: writingFull,
    alt: "Assignment Guru Homework Service",
    title: "Homework Service",
    description:
      "Unleash your academic potential with Alpha Tutor's 24/7 Homework Assistance. Transform challenging deadlines into triumphant achievements!",
  },
  // assignment-help
  {
    id: 1,
    href: "/services/assignment-help",
    image: presentation,
    alt: "Assignment Guru Assignment Help",
    title: "Presentation Writing",
    description:
      "Our team of experts is always there to help you to with your assignments",
  },
  // project-help
  {
    id: 2,
    href: "/services/project-help",
    image: ProjectLab,
    alt: "Assignment Guru Projects Services",
    title: "Project Services",
    description:
      "Transform your academic journey with impeccable project service from Alpha Tutor's Project Assistance. Achieve excellence and stand out in your studies.",
  },
  // exams
  {
    id: 3,
    href: "/services/exams-help",
    image: testQuiz,
    alt: "Assignment Guru Exams",
    title: "Exams",
    description:
      "Excel in your exams with our expert assistance. We craft outstanding exam reports, ensuring your academic success is our top priority at Assignment Guru.",
  },
  // quiz
  {
    id: 4,
    href: "/services/quizzes-help",
    image: testQuiz,
    alt: "Assignment Guru Quiz",
    title: "Quizzes",
    description:
      "Boost your quiz performance with our step-by-step solutions. Assignment Guru provides expert assistance to help you master your quiz challenges effortlessly.",
  },
  // dissertations
  {
    id: 5,
    href: "/services/dissertations-help",
    image: homework,
    alt: "Assignment Guru Dissertations",
    title: "Disseration Service",
    description:
      "Unlock academic achievements with our professional dissertation writing services. Experienced writers, timely delivery, and top-notch quality for your success.",
  },
  // research-proposal-help
  {
    id: 6,
    href: "/services/research-paper-help",
    image: ProjectLab,
    alt: "Assignment Guru Research Paper Help",
    title: "Research Paper Help",
    description:
      "Navigate the world of academic research confidently with our specialized assistance in crafting impactful and effective research papers.",
  },
  // thesis reports
  {
    id: 7,
    href: "/services/thesis-help",
    image: bibliography,
    alt: "Assignment Guru Term Paper",
    title: "Thesis Services",
    description:
      "Elevate Your Academic Thesis with Top-Quality Assistance",
  },
  // lab reports
  {
    id: 8,
    href: "/services/lab-report-help",
    image: ProjectLab,
    alt: "Assignment Guru Lab Reports",
    title: "Lab Report",
    description:
      "Dive into the world of precise scientific storytelling. Our Lab Reports offer an immersive journey from experiments to exceptional grades.",
  },
  // term paper help
  {
    id: 9,
    href: "/services/term-paper-help",
    image: programming,
    alt: "Assignment Guru Term Paper",
    title: "Term paper services",
    description:
      "Elevate Your Academic Term Paper with Top-Quality Assistance.",
  },
  // write-my-case-study
  {
    id: 10,
    href: "/services/case-study-help",
    image: video,
    alt: "Assignment Guru Case Study Services",
    title: "Case Study services",
    description:
      "Transforming complex scenarios into compelling narratives. Elevate your academic journey with our Case Studies service expertise.",
  },

];
const ServicePage = () => {
  const servicesFAQs = faq.filter((item) => item.label === "services");
  return (
    <>
      <SEO
        title="Expert 24/7 Academic Help Services for all Students | Assignment Guru"
        description="Discover a range of academic help services at Assignment Guru. From personalized tutoring to academic support, we are dedicated to elevating learning excellence."
        schemaStruct={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Assignment Guru",
            image: "https://assignment-guru.com/assets/D13_Logo-289828a8.webp",
            "@id": "https://assignment-guru.com/services",
            url: "https://assignment-guru.com/services",
            telephone: "8210403033",
            address: {
              "@type": "PostalAddress",
              streetAddress: "C/O -S.K.Mishra, C.M.R.I Gate, Bartand,",
              addressLocality: "Dhanbad",
              postalCode: "826001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 23.8059401,
              longitude: 86.4311465,
            },
          },
        ]}
      />
      <div className="bg-primaryWhite pt-20">
        <div>
          <div className="bg-[#EEF6FF] relative py-16 lg:py-20">
            <div className="px-6">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
                <div className="mt-12 grid">
                  <h2 className="antialiased text-3xl font-QuickSand font-extrabold pb-3">
                    Assignment Guru at your service
                  </h2>

                  <span className="flex flex-col sm:flex-row items-center justify-center pb-4">
                    <Image
                      loading="eager"
                      src={banner}
                      alt="banner tip"
                      title="banner"
                      width="50%"
                      height="100%"
                    />
                  </span>

                  <div className="mx-auto text-xl font-Nunito">
                    <span>
                      <strong>All help </strong>you need,{" "}
                      <strong>whenever</strong> you{" "}
                    </span>{" "}
                    <br />
                    <span className="inline-block lg:ml-16">
                      need is <strong>right here!</strong>
                    </span>
                  </div>
                </div>

                <div className="mt-12">
                  <AssignmentForm />
                </div>
                {/* <div className="flex flex-wrap sm:flex-nowrap flex-col sm:flex-row gap-2">
                  <div className="self-center">
                    <ServiceCard img={star} type="Rating" top="4.63/5" />
                    <ServiceCard
                      img={docs}
                      type="Delivered Orders"
                      top="586944+"
                    />
                  </div>

                  <div className="grid grid-cols-1 pt-5">
                    <ServiceCard2
                      img={student}
                      type="Student Reviews"
                      top="5896+"
                    />
                    <ServiceCard2
                      img={cert}
                      type="Subject Matter Experts"
                      top="65,000+"
                    />
                    <ServiceCard2
                      img={happy}
                      type="Happy Students"
                      top="151263+"
                    />
                  </div>
                </div> */}
              </div>

              <div className="absolute -bottom-10 right-10 md:right-1/3 lg:right-[60%]">
                <Image
                  loading="eager"
                  src={serv}
                  alt="service"
                  title="service"
                  width="auto"
                  height="auto"
                />
              </div>
            </div>
          </div>

          <div className="py-16 px-6 mx-auto max-w-screen-xl">
            <div className="" aria-label="card components">
              <div className="flex flex-col px-6 lg:px-10">
                <div className="flex flex-col items-center">
                  <h2 className="capitalize text-black font-Inter text-4xl leading-[50px] font-bold text-center sm:text-[49px] sm:leading-[60px] mb-6">
                    All Services
                  </h2>
                  <p className="font-medium text-black md:text-center px-3 sm:px-0 text-left font-Inter sm:text-base sm:mb-4 sm:tracking-[0.8px]">
                    Diverse problems call for diverse homework solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 md:px-4 gap-2 md:gap-3 lg:gap-4 mb-4">
              {services.map((service) => (
                <MainCard1
                  key={service.id}
                  to={service.href}
                  icon={service.image}
                  iconAlt={service.iconAlt}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
          <About />
          <Faq items={servicesFAQs} />
        </div>
      </div>
    </>
  );
};

export default ServicePage;

// const services = [
//   // assignment-service
//   {
//     id: 0,
//     href: "/services/assignment-services",
//     image: writingFull,
//     alt: "Assignment Guru Assignment Service",
//     title: "Assignment Service",
//     description:
//       "Unleash your academic potential with Alpha Tutor's 24/7 Homework Assistance. Transform challenging deadlines into triumphant achievements!",
//   },
//   // live session
//   {
//     id: 1,
//     href: "/services/live-session",
//     image: video,
//     alt: "Assignment Guru  Live Sessions",
//     title: "Live Sessions",
//     description:
//       "Immerse yourself in interactive learning experiences with Alpha Tutor's Live Sessions. Uncover the art of mastering complex subjects in real-time!",
//   },
//   // presentation-writing
//   {
//     id: 2,
//     href: "/services/presentation-writing",
//     image: presentation,
//     alt: "Assignment Guru Presentation Writing",
//     title: "Presentation Writing",
//     description:
//       "Craft compelling narratives and captivate your audience with Alpha Tutor's Presentation Writing Assistance. Elevate your presentations to leave a lasting impact.",
//   },
//   // project-reports
//   {
//     id: 3,
//     href: "/services/project-report-writing",
//     image: ProjectLab,
//     alt: "Assignment Guru Project Reports",
//     title: "Project Reports",
//     description:
//       "Transform your academic journey with impeccable project reports from Alpha Tutor's Project Assistance. Achieve excellence and stand out in your studies.",
//   },
//   // exams
//   {
//     id: 4,
//     href: "/services/exams",
//     image: testQuiz,
//     alt: "Assignment Guru Exams",
//     title: "Exams",
//     description:
//       "Excel in your exams with our expert assistance. We craft outstanding exam reports, ensuring your academic success is our top priority at Assignment Guru.",
//   },
//   // homework
//   {
//     id: 5,
//     href: "/services/homework",
//     image: homework,
//     alt: "Assignment Guru Homework",
//     title: "Homework",
//     description:
//       "Turn your assignments into masterpieces. Our Homework Writing Assistance ensures excellence in every task, making learning both productive and enjoyable.",
//   },
//   // programming
//   {
//     id: 6,
//     href: "/services/programming",
//     image: programming,
//     alt: "Assignment Guru Programming",
//     title: "Programming",
//     description:
//       "Unlock the world of coding with Alpha Tutor's step-by-step guidance. Master programming challenges and enhance your coding skills seamlessly.",
//   },
//   // web-development
//   {
//     id: 7,
//     href: "/services/web-development",
//     image: writingFull,
//     alt: "Assignment Guru Web Development",
//     title: "Web Development",
//     description:
//       "Embark on a journey to master web development with Assignment Guru. Get hands-on guidance and unravel the secrets of creating stunning websites and applications.",
//   },
//   // lab reports
//   {
//     id: 8,
//     href: "/services/lab-report",
//     image: ProjectLab,
//     alt: "Assignment Guru Lab Reports",
//     title: "Lab Report",
//     description:
//       "Dive into the world of precise scientific storytelling. Our Lab Reports offer an immersive journey from experiments to exceptional grades.",
//   },
//   // quiz
//   {
//     id: 9,
//     href: "/services/quizzes",
//     image: testQuiz,
//     alt: "Assignment Guru Quiz",
//     title: "Quizzes",
//     description:
//       "Boost your quiz performance with our step-by-step solutions. Assignment Guru provides expert assistance to help you master your quiz challenges effortlessly.",
//   },
//   // app-development
//   {
//     id: 10,
//     href: "/services/app-development",
//     image: writingFull,
//     alt: "Assignment Guru App Development",
//     title: "App Development",
//     description:
//       "Dive into the world of app development with Assignment Guru. Learn the art of creating innovative and functional applications through expert guidance and practical insights.",
//   },
//   // graphic-designing
//   {
//     id: 11,
//     href: "/services/graphic-designing",
//     image: ProjectLab,
//     alt: "Assignment Guru Graphic Designing",
//     title: "Graphic Designing",
//     description:
//       "Unleash your creativity with Alpha Tutor's Graphic Designing. From fundamentals to advanced techniques, master the art of visual communication and create stunning designs with expert guidance.",
//   },
//   // game-development
//   {
//     id: 12,
//     href: "/services/game-development",
//     image: gameDevelop,
//     alt: "Assignment Guru Game Development",
//     title: "Game Development",
//     description:
//       "Level up your skills with Alpha Tutor's Game Development. Dive into the world of coding, design, and storytelling, and turn your game development aspirations into reality with our expert guidance.",
//   },
//   // college-application-essay
//   {
//     id: 13,
//     href: "/services/college-application-essay",
//     image: bibliography,
//     alt: "Assignment Guru College Application Essay",
//     title: "College Application Essay",
//     description:
//       "Unlock your academic journey with our expert guidance on crafting powerful college application essays, tailored for success.",
//   },
//   // coursework-help
//   {
//     id: 14,
//     href: "/services/coursework-help",
//     image: homework,
//     alt: "Assignment Guru Coursework Help",
//     title: "Coursework Help",
//     description:
//       "Excel in your coursework with our dedicated Coursework Help, tailored to enhance your academic success and understanding.",
//   },
//   // research-proposal-help
//   {
//     id: 15,
//     href: "/services/research-proposal-help",
//     image: ProjectLab,
//     alt: "Assignment Guru Research Proposal Help",
//     title: "Research Proposal Help",
//     description:
//       "Navigate the world of academic research confidently with our specialized assistance in crafting impactful and effective research proposals.",
//   },
//   // write-my-case-study
//   {
//     id: 16,
//     href: "/services/write-my-case-study",
//     image: ProjectLab,
//     alt: "Assignment Guru Write My Case Study",
//     title: "Write My Case Study",
//     description:
//       "Transforming complex scenarios into compelling narratives. Elevate your academic journey with our 'Write My Case Study' service expertise.",
//   },
//   // sop-writing-service
//   {
//     id: 17,
//     href: "/services/sop-writing-service",
//     image: writingFull,
//     alt: "Assignment Guru SOP Writing Service",
//     title: "SOP Writing Service",
//     description:
//       "Elevate your applications with our tailored SOP Writing Service, ensuring a standout and compelling portrayal of your achievements and aspirations.",
//   },
//   // write-my-annotated-bibliography
//   {
//     id: 18,
//     href: "/services/write-my-annotated-bibliography",
//     image: bibliography,
//     alt: "Assignment Guru Write My Annotated Bibliography",
//     title: "Write My Annotated Bibliography",
//     description:
//       "Elevate your academic work with our personalized service. Let us expertly compile your annotated bibliography, ensuring excellence and precision.",
//   },
//   // {
//   //   id: 19,
//   //   href: "/services/scholarship-essay-writing-service",
//   //   image: writingFull,
//   //   alt: "Assignment Guru Scholarship Essay Writing Service",
//   //   title: "Scholarship Essay Writing Service",
//   //   description:
//   //     "Secure your future with our Scholarship Essay Writing Service. Let your unique story shine through, capturing the scholarship committee's attention.",
//   // },
// ];