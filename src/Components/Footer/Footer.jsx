import LowerFooterCard from "./LowerFooterCard"
import UpperFooterCard from "./UpperFooterCard"

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
        <UpperFooterCard/>
        <LowerFooterCard/>
    </div>
  )
}

export default Footer