import "../App.css";
import MainCard from "../components/cards/MainCard";
import user from "../assets/user.svg";
import line from "../assets/line.svg";
import bg from "../assets/ab.svg"

const ChooseUs = () => {
    const bgstyles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section id="services" className=" bg-primaryWhite" style={bgstyles}  >
      <div className="mx-auto max-w-screen-2xl">
        <div className="wrapper py-10 sm:py-24">
          <div className="mb-14">
            <h2 className="gradText text-[19px] text-center uppercase font-Inter font-bold mb-6">
              Why Choose Us?
            </h2>
            <div className="text-[44px] text-center capitalize font-Nunito font-normal">
              <strong>benefits</strong> of online tutoring
              <br /> services at{" "}
              <span className="relative">
                <strong>Assignment {"Guru's"}</strong>
                <div className="mt-3">
                  <img
                    src={line}
                    alt="line"
                    className="absolute  left-10 top-10 mt-4"
                  />
                  <img
                    src={line}
                    alt="line"
                    className="absolute left-10 -bottom-3"
                  />
                </div>
              </span>
            </div>
          </div>
          <div className="cards">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-4 px-6 lg:gap-6 gap-8">
              <MainCard
                icon={user}
                iconBgColor="bg-violet-dark"
                title="Apps For Mobile & Web "
                description="Our doers will make very user-friendly and efficient apps,exactly matching your needs. Boost your business now!"
              />
              <MainCard
                icon={user}
                iconBgColor="bg-green-lime"
                title="Homework Help "
                description="Stuck with homework? PhD doers have a distinctive mode of expression assisting students to solve assignments flawlessly."
              />
              <MainCard
                icon={user}
                iconBgColor="bg-pink-hotPink"
                title="live sessions"
                description="We provide the best doers for you to interact with in real time to get instant solutions for your problems. Pickup your phone now !"
              />
              <MainCard
                icon={user}
                iconBgColor="bg-orange-dark"
                title="lab work"
                description="PSpice, Orcad, AutoCAD,Solidworks, and many more simulation softwares, our Lab doers can handle them all."
              />
              <MainCard
                icon={user}
                iconBgColor="bg-green-olive"
                title="project help"
                description="Get the most professional project assistance from our PhD doers who can guide and walk you through your project online."
              />
              {/* <MainCard
                icon={user}
                iconBgColor="bg-gray-dark"
                title="video calling support"
                description="24/7 tutor availability assured at tutorlancer matched to your learning style!"
              /> */}
              <MainCard
                icon={user}
                iconBgColor="bg-[#14AAF5]"
                title="writing help"
                description="Our Native essay doers help you meet university standards in terms of writing and structuring of academic essays."
              />
              {/* <MainCard
                icon={user}
                iconBgColor="bg-gray-slate"
                title="homework help"
                description="choose an experienced tutor that fits your budget"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
