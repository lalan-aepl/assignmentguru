import p1 from "../assets/p1.svg";
import p2 from "../assets/p2.svg";
import bg from "../assets/banner3.svg";
import { BsPlayFill } from "react-icons/bs";
// import CustomButton from "../components/buttons/CustomButton";

const About = () => {
  // const bgstyles = {
  //   backgroundImage: `url(${bg})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "10%",
  //   backgroundRepeat: "no-repeat",
  //   height: "100vh",
  // };

  const bg1 = {
    backgroundImage: `url(${p1})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height:'250px'
  };

  const bg2 = {
    backgroundImage: `url(${p2})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height:'250px'
  };

  const aboutbg = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height:'auto'
  };
//   function handleScroll(section){
//     let value=document.getElementById(section)
//     console.log(value)
//     if(value){
//         value.scrollIntoView({behavior:"smooth",block:'center',inline:'center'})
//     }

// }
  return (
    <section id="about" className="bg-primaryWhite" style={aboutbg}>
      <div
        className="mx-auto max-w-screen-2xl px-4 py-10 sm:py-20 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-center justify-center gap-2 sm:relative lg:mr-16">
            <div className="relative h-full w-72" style={bg1}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 sm:h-16 sm:w-16 bg-blue-light flex justify-center items-center rounded-full">
                <BsPlayFill color="white" size={26} />
              </div>
            </div>

            {/* second image */}
            <div className="relative lg:absolute lg:left-52 lg:top-40 xl:top-40 xl:left-80 2xl:left-96 h-full w-72" style={bg2}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 sm:h-16 sm:w-16 bg-blue-light flex justify-center items-center rounded-full">
                <BsPlayFill color="white" size={26} />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-base font-bold font-Inter uppercase text-[#D7A74A] sm:text-[19px]">
              About Us
            </p>

            <h3 className="font-medium capitalize font-Nunito leading-[30px] xl:leading-[66px] xl:text-[44px] text-2xl">
              <strong>
                {" "}
                talented and highly <br /> qualified{" "}
              </strong>
              tutors to serve
              <br /> you for online help.
            </h3>

            <div className="py-6 lg:py-8">
              <article className="text-black">
                <p className="pb-3">With Assignment Guru as a reliable academic companion, students can overcome challenges, improve their grades, and excel in their studies. {"It's"} the ultimate resource for academic success, supporting students every step of the way.</p>
                <p>
                  Tutorlancer is an online platform that connects online tutors
                  with students across the globe who seeks academic help. We
                  help students across the globe who are stuck with their
                  subjects, by connecting them with tutors. We aim to
                  strategically connect students and tutors online.
                </p>
              </article>
            </div>
            
            <a
            href="https://wa.me/918987909463" target="_blank" rel="noreferrer"
            className="inline-block rounded-full cursor-pointer bg-gradient-to-r from-[#FF7714] to-[#FFCF59]  px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            Ask Questions 
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
