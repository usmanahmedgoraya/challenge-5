/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Button = ({text,className,position,onClick}) => {
  return (
    <div className={`flex ${position} my-3`}>
      {onClick?
        (<button onClick={onClick} className={`${className} text-white px-4 py-2 rounded-full`}>{text}</button>):(<button  className={`${className} text-white px-4 py-2 rounded-full`}>{text}</button>)
      }
    </div>
  )
}

export default Button