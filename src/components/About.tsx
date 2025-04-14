import work1 from "../../public/work1.png";
import work2 from "../../public/work2.png";
import work3 from "../../public/work3.png";
import work4 from "../../public/work4.png";
import Phone from "./Phone";
import Work from "./Work";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col w-full mt-20 lg:mt-40 px-4 lg:px-40 ">
      <div className="flex flex-col items-center justify-center gap-5 ">
        <h1 className="text-4xl font-semibold ">
          HOW <span className="text-[#75BF7A] ">TERE</span> WORKS
        </h1>
        <p className="text-[#9E9DA2] max-w-[400px] text-center ">
          Download and install the tere app. Enter your phone number and make
          your user account. when approved you may start driving.
        </p>
      </div>
      <div className=" hidden lg:flex mt-20 gap-20 justify-center  ">
        <div className="flex flex-col max-w-[300px] gap-20  ">
          <Work
            img={work1}
            title="REQUEST A RIDE"
            desc="Have to reach office or going for shopping ? 
            Just put your current location and destination and search a ride that suits you"
            alignItems="end"
            alignText="right"
          />
          <Work
            img={work3}
            title="INSTANT NOTIFICATIONS"
            desc="Get instant notifications for your rides and be in contact with fellow riders all the time"
            alignItems="end"
            alignText="right"
          />
        </div>
        <div className="flex flex-col max-w-[300px] gap-20  ">
          <Phone />
        </div>
        <div className="flex flex-col max-w-[300px] gap-20  ">
          <Work
            img={work2}
            title="REQUEST A RIDE"
            desc="Have to reach office or going for shopping ? 
            Just put your current location and destination and search a ride that suits you"
            alignItems="start"
            alignText="left"
          />
          <Work
            img={work4}
            title="INSTANT NOTIFICATIONS"
            desc="Get instant notifications for your rides and be in contact with fellow riders all the time"
            alignItems="start"
            alignText="left"
          />
        </div>
      </div>
      <div className="flex flex-col lg:hidden mt-20">
        <Phone />
        <div className="flex flex-col w-full mt-20 gap-10 ">
          <h1 className="text-4xl font-bold w-full  flex justify-center gap-3 ">
            <span className="text-[#75BF7A] ">TERE </span> BENEFITS
          </h1>
          <Work
            img={work1}
            title="REQUEST A RIDE"
            desc="Have to reach office or going for shopping ? 
            Just put your current location and destination and search a ride that suits you"
            alignText="center"
            alignItems="center"
          />
          <Work
            img={work2}
            title="REQUEST A RIDE"
            desc="Have to reach office or going for shopping ? 
            Just put your current location and destination and search a ride that suits you"
            alignText="center"
            alignItems="center"
          />
          <Work
            img={work3}
            title="INSTANT NOTIFICATIONS"
            desc="Get instant notifications for your rides and be in contact with fellow riders all the time"
            alignText="center"
            alignItems="center"
          />
          <Work
            img={work4}
            title="INSTANT NOTIFICATIONS"
            desc="Get instant notifications for your rides and be in contact with fellow riders all the time"
            alignText="center"
            alignItems="center"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
