import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar"
import LogoBox from "./Components/LogoBox"
import Main from "./Components/Main"
import ShoppingProducts from "./Components/ShoppingProducts"
import Hero3 from "./Components/Hero-3"
import InfoCards from "./Components/InfoCards"
import Hero2 from "./Components/Hero2"

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Main />
      <InfoCards />
      <Hero2 />
      <LogoBox />
      <Hero3 />
      <ShoppingProducts />
      <Footer />
    </div>
  )
}

export default App