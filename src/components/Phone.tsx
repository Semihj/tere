import phone from "../../public/phone.png"
type Props = {}

function Phone({}: Props) {
  return (
    <div className="w-full h-max relative flex lg:inline-block justify-center   min-h-40 " >
        <div className="w-full h-full flex justify-center items-center absolute">
        <div className="bg-[#75BF7A] -z-10 w-full lg:scale-125 lg:h-1/2 h-[60%] rounded-full  " ></div>
        </div>
        <img src={phone} alt="" className="z-10"/>

    </div>
  )
}

export default Phone