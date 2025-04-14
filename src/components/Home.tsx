import map from "../../public/Map.png";
import vector from "../../public/vector.png";
import car from "../../public/Car.png";
import app from "../../public/app_store.png"
import play from "../../public/play-store.png"


type Props = {};

function Home({}: Props) {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between px-5 gap-10 lg:gap-0 lg:px-40">
      <div className="w-full  lg:mt-20 gap-6 flex flex-col">
        <h1 className="font-bold lg:text-6xl text-4xl " >DOWNLOAD APP, SAVE MONEY, MAKE FRIENDS!</h1>
        <p className="text-[#9E9DA2] lg:text-2xl text-xl " >Its simple and its free. Play your part in reducing Carbon Footprint and help Mother Nature to sustain its beauty. So what are you waiting for ?  
        Lets ride together</p>
        <div className="flex gap-5 mt-10 ">
            <button className="text-white bg-black py-2 lg:py-3 lg:px-8 px-5 rounded-sm flex items-center gap-1 lg:gap-2 font-bold lg:text-2xl uppercase "><img src={play} alt="" className="w-10"/> Download</button>
            <button className="text-white bg-black py-2 lg:py-3 lg:px-8 px-5 rounded-sm flex items-center gap-1 lg:gap-2 font-bold lg:text-2xl uppercase "><img src={app} alt="" className="w-10"/> Download</button>
       
        </div>
      </div>
      <div className="w-full flex flex-col   relative">
        <div className=" relative w-full h-max max-w-[550px] ">
        <img src={map} alt="" className="w-full" />
        
        </div>
        <img src={vector} alt="" className="absolute lg:top-10 lg:left-[100px] top-5 left-14 h-[200px] lg:h-[300px] object-cover" />
        <img src={car} alt="" className="w-full object-cover mt-20 " />
        
      </div>
    </div>
  );
}

export default Home;
