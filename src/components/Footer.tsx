import logo from "../../public/footer-logo.png"
import playS from "../../public/play-store.png"
import appS from "../../public/app_store.png"
type Props = {}

function Footer({}: Props) {
  return (
    <div className="mt-40 flex lg:p-40 w-full mb-20 " >
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 " >
          <div className="h-full flex items-center justify-center ">
          <img src={logo} alt="" className="lg:w-[300px] " />
          </div>
          <div className="lg:hidden flex flex-col lg:flex-row justify-center items-center gap-5   ">
          <button className="flex gap-2 bg-black rounded-md w-max h-max items-center p-4 text-white " >
            <img src={playS} alt="" className="object-cover" />
              <p className="uppercase font-semibold" >Download</p>
          </button>
          <button className="flex gap-2 bg-black rounded-md w-max h-max items-center p-4 text-white " >
            <img src={appS} alt="" className="object-cover" />
              <p className="uppercase font-semibold" >Download</p>
          </button>
        </div>
          <div className="flex flex-col gap-5 justify-center w-full items-center lg:items-start ">
            <h1 className="text-4xl" >Be Our Friend</h1>
            <p className="text-[#8B8BA5] "  >3, Season Park, Jakarta</p>
            <p className="text-[#8B8BA5] " >support@foodyar.co,id</p>
            <p className="text-[#8B8BA5] " >021 - 1111 - 2222</p>
          </div>
        </div>
        <div className="lg:flex flex-col lg:flex-row justify-center items-center gap-5 hidden  ">
          <button className="flex gap-2 bg-black rounded-md w-max h-max items-center p-4 text-white " >
            <img src={playS} alt="" className="object-cover" />
              <p className="uppercase font-semibold" >Download</p>
          </button>
          <button className="flex gap-2 bg-black rounded-md w-max h-max items-center p-4 text-white " >
            <img src={appS} alt="" className="object-cover" />
              <p className="uppercase font-semibold" >Download</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer