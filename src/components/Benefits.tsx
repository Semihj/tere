import frame from "../../public/Frame.png";
import frame2 from "../../public/Frame2.png";
import frame3 from "../../public/Frame3.png";
import Benefit from "./Benefit";
type Props = {};

function Benefits({}: Props) {
  return (
    <div className="lg:px-40 px-4 flex flex-col mt-10 lg:mt-40  ">
      <h1 className="text-4xl font-bold w-full  flex justify-center gap-3 ">
        <span className="text-[#75BF7A] ">TERE </span> BENEFITS
      </h1>
      <div className="flex flex-col w-full gap-10  mt-10 ">
        <Benefit
          img={frame}
          title="Flexible
working hours"
          text="You can decide when, and how much
time you want to drive."
          number="01"
          align="start"
        />
        <Benefit
          img={frame2}
          title="Earnings"
          text="By driving with tere you can 
earn more."
          number="02"
          align="end"
        />
        <Benefit
          img={frame3}
          title="Customer 
support 24/7"
          text="Tere is a local service provider and we are proud to support you in your local language. We are proud to be at your service 24/7!"
          number="03"
          align="start"
        />
      </div>
    </div>
  );
}

export default Benefits;
