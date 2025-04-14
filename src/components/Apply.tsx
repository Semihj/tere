type Props = {};

function Apply({}: Props) {
  return (
    <div className="lg:px-40 px-4 mt-20 lg:mt-40 ">
      <div className="w-full flex flex-col  lg:flex-row border bg-[#75BF7A] p-4 lg:px-10 items-center rounded-md text-white min-h-40 ">
        <h1 className="text-3xl flex-1/3  " >Let’s go. Get a link to download the app.</h1>
        <div className="flex flex-col lg:flex-row lg:gap-2 items-center flex-2/3 mt-5 lg:mt-0 gap-5 justify-center w-full ">
        <input
          type="number"
          placeholder="Enter your phone number"
          className="w-full lg:w-2/3 p-5 bg-white text-black rounded-sm outline-none"
        />
        <button className="bg-black lg:px-8 h-full p-5 w-full lg:w-1/3 rounded-sm font-semibold" >APPLY TO DRIVE</button>
        </div>
      </div>
    </div>
  );
}

export default Apply;
