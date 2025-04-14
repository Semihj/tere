
type Props = {
    img:any;
    title:string;
    text:string;
    number:string;
    align?:string;

}

function Benefit({img,title,text,number,align}: Props) {
  return (
    <div className="flex " style={{justifyContent:align}} >
    <div className={`flex flex-col ${align == "end" && "lg:flex-row-reverse"} items-center lg:p-4 py-5 gap-5 lg:flex-row lg:justify-between lg:items-center rounded-md shadow-md w-full lg:min-h-[200px]  max-w-5xl bg-white  `}>
    <div className="flex flex-col  lg:px-5 ">
        <div className="flex gap-5  max-w-sm ">
            <h1 className=" text-6xl lg:text-[100px] text-[#75BF7A]" >{number}.</h1>
            <p className="text-2xl lg:text-3xl font-bold  " >{title} </p>
        </div>
        <p className="text-[#9E9DA2] hidden lg:inline-block " >{text}</p>
    </div>
    <img src={img} alt="" className="w-2/3 lg:w-fit lg:px-20"/>
    <p className="lg:hidden text-[#9E9DA2] text-center mt-5 " >
    {text}
    </p>
</div></div>
  )
}

export default Benefit