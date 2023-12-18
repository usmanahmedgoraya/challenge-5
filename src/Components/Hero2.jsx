import "../App.css";

export default function Hero2() {
  return (
    <>
      <div className="w-full h-auto px-[1rem] md:px-[4rem] pt-[4rem] pb-[4rem]">
        <div className="max-w-[45rem] h-auto grid grid-cols-1 container">
          <div className="w-full h-auto col-span-1">
            <div
              className="text-2xl sm:text-3xl md:text-5xl font-[600] duration-200"
              style={{ fontFamily: "Mono Sans, sans-serif" }}
            >
              Harnessing technology
            </div>
          </div>
          <div className="w-full h-auto col-span-1">
            <div
              className="text-2xl sm:text-3xl md:text-5xl font-[600] duration-200"
              style={{ fontFamily: "Mono Sans, sans-serif" }}
            >
              for a brighter future
            </div>
          </div>
          <div className="w-full h-auto col-span-1 py-5 md:pe-[8rem]">
            <div className="duration-200 font-[400] text-black text-[0.9rem] md:text-[1.1rem]">
              We believe technology is the answer to the world’s greatest
              challenges. It’s also the cause, so we find ourselves in bit of a
              catch 22 situation.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
