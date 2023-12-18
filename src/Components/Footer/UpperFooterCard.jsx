
const UpperFooterCard = () => {
  return (
    <div className="bg-black text-white  rounded-md flex flex-col items-center py-8 w-[80%]">
      <div className="w-[80%] flex flex-col items-center md:items-start text-center md:text-left justify-center md:justify-start ">
        <div className="my-8 space-y-7">
          <h1 className="text-3xl">Tell us about your project</h1>
          <div>
          <button className="bg-white text-black  px-[0.7rem] py-[0.2rem] rounded-full cursor-pointer hidden md:block text-[1.1rem]">
                Say Hej
              </button>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-600"></div>
        <div className="flex flex-col w-full my-4">
          <div className="text-2xl font-bold my-4">
            Our Offices
          </div>
          <div className="flex justify-between md:flex-row flex-col space-y-4 md:space-y-0">
            <div>
              <h1 className="font-bold text-lg my-2">Copenagen</h1>
              <h1>1 Carlsberg Gate</h1>
              <h1>1260, København, Denmark</h1>
            </div>
            <div>
              <h1 className="font-bold text-lg my-2">Billund</h1>
              <h1>24 Lego Allé</h1>
              <h1>7190, Billund, Denmark</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpperFooterCard