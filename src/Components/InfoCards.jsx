import Frame from "../assets/Frame.svg";
import Frame1 from "../assets/Second.svg";
import Frame2 from "../assets/Third.svg";

export default function InfoCards() {
  return (
    <>
      <div className="w-full h-auto px-[1rem] md:px-[4rem] py-[1rem] mb-8">
        <div className="max-w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 container gap-x-10">
          <div className="w-full h-auto md:col-span-1 col-span-3 mb-4">
            <div className="border border-gray-300 rounded-3xl overflow-hidden px-[1.2rem] py-[1.2rem] cursor-pointer hover:bg-cyan-50 hover:border-cyan-800 duration-1000 hover:shadow-2xl shadow-md">
              <div className="mb-5">
                <img className="w-[3rem]" src={Frame} alt="" />
              </div>
              <div>
                <div className="text-black mb-5">
                  <span className="font-bold">2023</span>
                  <span style={{ fontFamily: "Mono Sans, sans-serif" }}>
                    {" "}
                    / Case Study
                  </span>
                </div>
                <div
                  className="font-bold text-[1.35rem] mb-5"
                  style={{ fontFamily: "Mono Sans, sans-serif" }}
                >
                  Skip the bank, borrow from those you trust
                </div>
                <div className="text-[#515151] mb-3">
                  FamilyFund is a crowdfunding platform for friends and family.
                  Allowing users to take personal loans from their network
                  without a traditional financial institution.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto md:col-span-1 col-span-3 mb-4">
            <div className="border border-gray-300 rounded-3xl overflow-hidden px-[1.2rem] py-[1.2rem] cursor-pointer hover:bg-cyan-50 hover:border-cyan-800 duration-1000 hover:shadow-2xl shadow-md pb-12">
              <div className="mb-5">
                <img className="w-[3rem]" src={Frame1} alt="" />
              </div>
              <div>
                <div className="text-black mb-5">
                  <span className="font-bold">2022</span>
                  <span style={{ fontFamily: "Mono Sans, sans-serif" }}>
                    {" "}
                    / Case Study
                  </span>
                </div>
                <div
                  className="font-bold text-[1.35rem] mb-5"
                  style={{ fontFamily: "Mono Sans, sans-serif" }}
                >
                  Get a hodl of your health
                </div>
                <div className="text-[#515151] mb-3">
                  Unseal is the first NFT platform where users can mint and
                  trade NFTs of their own personal health records, allowing them
                  to take control of their data.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto md:col-span-1 col-span-3 mb-4">
            <div className="border border-gray-300 rounded-3xl overflow-hidden px-[1.2rem] py-[1.2rem] cursor-pointer hover:bg-cyan-50 hover:border-cyan-800 duration-1000 hover:shadow-2xl shadow-md pb-10">
              <div className="mb-5">
                <img className="w-[3rem]" src={Frame2} alt="" />
              </div>
              <div>
                <div className="text-black mb-5">
                  <span className="font-bold">2023</span>
                  <span style={{ fontFamily: "Mono Sans, sans-serif" }}>
                    {" "}
                    / Case Study
                  </span>
                </div>
                <div
                  className="font-bold text-[1.35rem] mb-5"
                  style={{ fontFamily: "Mono Sans, sans-serif" }}
                >
                  Overcome your fears, find your match
                </div>
                <div className="text-[#515151] mb-3">
                  Find love in the face of fear — Phobia is a dating app that
                  matches users based on their mutual phobias so they can be
                  scared together.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
