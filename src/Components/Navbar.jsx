import { useState } from "react";
import logo from "../assets/ph_framer-logo.svg";
import cart from "../assets/Header/bi_cart.svg";
import useCartStore from "../Store/CartStore";
import { FaEquals } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";



export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [cartMenu, setcartMenu] = useState(false)
  const { Cart } = useCartStore((state) => ({
    Cart: state.Cart
  }))

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleCartMenu = () => {
    setcartMenu((prev) => !prev)
  }

  return (
    <>
      <div className={`relative z-50 pt-6 bg-black transition-all duration-500 text-black ${isMenuOpen ? "min-h-screen" : ""}`}>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`relative w-full h-screen bg-black z-50 hamberg1`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MdOutlineClear />
              <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2">
                <div className="w-full h-auto col-span-1 border border-gray-500 px-8 py-5 md:py-[2rem] hover:cursor-pointer hover:bg-gray-800 hover: text-white duration-1000 shadow-2xl hover:border-black">
                  <p className="text-white md:text-[4rem]">Our Work</p>
                </div>
                <div className="w-full h-auto col-span-1 border border-gray-500 px-8 py-5 md:py-[2rem] hover:cursor-pointer hover:bg-gray-800 hover: text-white duration-1000 shadow-2xl hover:border-black">
                  <p className="text-white md:text-[4rem]">About Us</p>
                </div>
                <div className="w-full h-auto col-span-1 border border-gray-500 px-8 py-5 md:py-[2rem] hover:cursor-pointer hover:bg-gray-800 hover: text-white duration-1000 shadow-2xl hover:border-black">
                  <p className="text-white md:text-[4rem]">Processes</p>
                </div>
                <div className="w-full h-auto col-span-1 border border-gray-500 px-8 py-5 md:py-[2rem] hover:cursor-pointer hover:bg-gray-800 hover: text-white duration-1000 shadow-2xl hover:border-black">
                  <p className="text-white md:text-[4rem]">Blog</p>
                </div>
                <div className="w-full h-auto col-span-1">
                  <div className="text-white font-semibold text-[1.6rem]">
                  </div>
                </div>
              </div>
            </motion.div >
          )}
        </AnimatePresence >
        <div className={`relative z-50 w-full h-auto px-[1rem] md:px-[4rem] py-[1rem] rounded-t-2xl bg-white `}>
          <div className="max-w-full h-auto grid grid-cols-2 container">
            <div className="w-full h-auto col-span-1 flex items-center justify-start">
              <div className="flex items-center justify-center gap-[0.5rem]">
                <img className="w-[1.3rem]" src={logo} alt="Ecommerce Logo" />
                <div
                  className="font-bold text-xl"
                >
                  Ecommerce App
                </div>
              </div>
            </div>
            <div className="w-full h-auto col-span-1 flex items-center justify-end">
              <div className="flex items-center justify-center gap-[1rem]">
                <div className="bg-black text-white px-[0.7rem] py-[0.2rem] rounded-full cursor-pointer hidden md:block text-[1.1rem]">
                  Contact us
                </div>
                <div className="hidden md:block">
                  <div className="text-[1.1rem] flex items-center justify-center bg-black text-white px-[0.7rem] py-[0.2rem] rounded-full gap-[0.3rem] cursor-pointer" onClick={handleCartMenu}>
                    <img src={cart} alt="Bi Cart" />
                    <div>({Cart.length})</div>
                  </div>
                </div>
                <div className="flex flex-col relative">
                  {cartMenu &&
                    Cart.map((e, index) => {
                      return (
                        <div key={index} className="absolute top-8 right-0 bg-gray-700 text-white px-4 py-1 rounded-md">
                          {e.category.name}
                        </div>
                      )
                    })
                  }
                </div>
                <div
                  className="bg-[#DDDDDD] px-2.5 py-2.5 rounded-full cursor-pointer hamberg hover:bg-green-400 hover:text-white hover:shadow-2xl"
                  onClick={toggleMenu}
                >
                  <FaEquals />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
