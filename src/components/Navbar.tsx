import logo from "../../public/logo.png"
import { TiThMenu } from "react-icons/ti";
type Props = {}

function Navbar({}: Props) {
  return (
    <div className="flex lg:px-40 px-4 w-full justify-between items-center h-40 " >
        <img src={logo} alt="logo" className="  lg:w-40 object-contain" />
        <div className=" hidden lg:flex gap-8 items-center ">
            <h1 className="text-xl ">Home</h1>
            <h1 className="text-xl ">How tere works</h1>
            <h1 className="text-xl ">Tere benefits</h1>
            <button className="text-white bg-[#75BF7A] py-3 px-8 rounded-md " >Help Center</button>
        </div>
        <div className="lg:hidden flex">
            <TiThMenu className="text-5xl" />
        </div>
    </div>
  )
}

export default Navbar