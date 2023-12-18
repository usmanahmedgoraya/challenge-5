
const LowerFooterCard = () => {
  return (
    <>
      <footer className="text-gray-600 body-font flex w-[80%] flex-col justify-center">
        <div className="px-5 py-24 ">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Work</h2>
              <nav className="list-none mb-10 space-y-5">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">FamilyFund</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Unseal</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Phobia</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">See allFourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Company</h2>
              <nav className="list-none mb-10 space-y-5">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Process</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Contact us</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Connect</h2>
              <nav className="list-none mb-10 space-y-5">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Facebook</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Instagram</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Twitter</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">GitHub</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Dribbble</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">Sign up for our newsletter</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-44 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600 text-center md:text-left">Subscribe to get the latest design news, articles, resources
                    and inspiration.</label>
                  <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Email address" />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-black border-0 py-[1.13rem] px-3 focus:outline-none hover:bg-black/90 rounded">
                  <img src="/public/Footer/Vector.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Line */}
        <div className="w-full h-0.5 bg-gray-600"></div>
        <div className="">
          <div className="container px-5 py-6 mx-auto flex justify-between items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src="/public/Footer/Vector.png" alt="logo" />
              <span className="ml-3 text-xl">Ecommerce App</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © Ecommerce Agency Inc. 2023
            </p>

          </div>
        </div>
      </footer>

    </>
  )
}

export default LowerFooterCard