
export default function Main() {
  return (
    <>
      <div className="w-full h-auto px-[1rem] md:px-[4rem] pt-[9rem] pb-[4rem]">
        <div className="max-w-[45rem] h-auto grid grid-cols-1 container">
          <div className="w-full h-auto col-span-1">
            <div
              className="text-2xl sm:text-3xl md:text-5xl text-left font-[800] duration-200"
              style={{ fontFamily: "Mono Sans, sans-serif" }}
            >
              Award-winning
            </div>
          </div>
          <div className="w-full h-auto col-span-1">
            <div
              className="text-2xl sm:text-3xl md:text-5xl font-[800] duration-200 text-left"
              style={{ fontFamily: "Mono Sans, sans-serif" }}
            >
              Ecommerce Application
            </div>
          </div>
          <div className="w-full h-auto col-span-1">
            <div
              className="text-2xl sm:text-3xl md:text-5xl font-[800] duration-200 text-left"
              style={{ fontFamily: "Mono Sans, sans-serif" }}
            >
              based in Denmark
            </div>
          </div>
          <div className="w-full h-auto col-span-1 py-5">
            <div className="duration-200 font-[400] text-black text-[0.9rem] md:text-[1.1rem] text-left">
              We are a development studio working at the intersection of design
              and technology. It’s a really busy intersection though — a lot of
              our staff have been involved in hit and runs.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
