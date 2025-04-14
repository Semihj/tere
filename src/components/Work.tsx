
type Props = {
    img:any,
    title:string,
    desc:string,
    alignText:any,
    alignItems:string
}

function Work({img,title,desc,alignText,alignItems}: Props) {
  return (
    <div className="flex flex-col gap-3 " style={{textAlign:alignText,alignItems:alignItems}} >
    <img src={img} alt="" className="w-[70px] "/>
    <h1 className="font-bold text-2xl" >{title}</h1>
    <p className="text-[#9E9DA2] " >
        {desc}
    </p>
  </div>
  )
}

export default Work