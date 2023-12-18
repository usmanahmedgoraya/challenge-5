import Logo from "../assets/trend.svg";
import Background from "../Background/Background";

export default function Hero3() {
  return (
    <>
      <div className=" z-50 w-full h-auto back px-[1rem] md:px-[4rem] py-[1rem]">
        <div className="max-w-full h-auto grid grid-cols-1 container">
          <div className="w-full h-auto col-span-1">
            <div
              className="text-black text-lg sm:text-xl md:text-2xl py-8 md:py-24 font-semibold max-w-4xl"
              style={{ fontFamily: "Mono Sans, sans-serif" }}
            >
              The team at Studio went above and beyond with our onboarding, even
              finding a way to access the user’s microphone without triggering
              one of those annoying permission dialogs.
              <img className="py-5" src={Logo} alt="Trend" />
            </div>
          </div>
        </div>
      </div>
      <Background />
    </>
  );
}
