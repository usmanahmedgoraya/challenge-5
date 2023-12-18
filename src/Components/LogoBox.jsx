import A1 from "../assets/A1.svg";
import A2 from "../assets/A2.svg";
import A3 from "../assets/A3.svg";
import A4 from "../assets/A4.svg";
import A5 from "../assets/A5.svg";
import A6 from "../assets/A6.svg";
import A7 from "../assets/A7.svg";
import A8 from "../assets/A8.svg";

export default function LogoBox() {
  return (
    <div className="w-full h-auto px-[0.6rem]">
      <div className="max-w-full h-auto bg-black grid grid-cols-1 container rounded-2xl py-8 md:py-16 md:px-[4rem] px-[0.2rem]">
        <div className="md:block hidden">
          <div className="w-full h-auto col-span-1 flex items-center justify-start px-[0.5rem] mb-10">
            <div className="flex items-center gap-5">
              <div className="text-white">
                We’ve worked with hundreds of amazing people
              </div>
              <hr className="text-white w-[40vw]" />
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <div className="w-full h-auto col-span-1 flex items-center justify-center gap-6 px-[0.5rem] mb-5">
            <hr className="text-white w-[8rem]" />
            <div className="text-white text-center">
              We’ve worked with hundreds of amazing people
            </div>
            <hr className="text-white w-[8rem]" />
          </div>
        </div>
        <div className="w-full h-auto col-span-1 px-[0.5rem]">
          <div className="w-full h-auto flex items-center justify-center space-y-5 sm:space-y-0 sm:justify-between flex-wrap mb-5">
            <img className="w-[10rem]" src={A1} alt="A1" />
            <img className="w-[10rem]" src={A2} alt="A2" />
            <img className="w-[10rem]" src={A3} alt="A3" />
            <img className="w-[10rem]" src={A4} alt="A4" />
          </div>
          <hr className="my-4 sm:hidden w-[50%] mx-auto flex"/>
          <div className="w-full h-auto flex items-center justify-center space-y-5 sm:space-y-0 sm:justify-between flex-wrap">
            <img className="w-[10rem]" src={A5} alt="A5" />
            <img className="w-[10rem]" src={A6} alt="A6" />
            <img className="w-[10rem]" src={A7} alt="A7" />
            <img className="w-[10rem]" src={A8} alt="A8" />
          </div>
        </div>
      </div>
    </div>
  );
}
