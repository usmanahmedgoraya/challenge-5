/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../Button";
import useCartStore from "../../Store/CartStore";
import { ToastContainer, toast } from 'react-toastify';
import sample from "../../assets/Products/device-mockups-gray 1-3.png"

import 'react-toastify/dist/ReactToastify.css';



const Card = ({ item }) => {
    const { addToCart } = useCartStore((state) => ({
        addToCart: state.addToCart
    }))

    const [imageUrl, setImageUrl] = useState(item.images[0] || sample);

    const handleImageError = () => {
        setImageUrl(sample);
    };

    const handleAddToCart = (item) => {
        addToCart(item)
        toast.success('Item is added to Cart Successfully', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }


    return (
        <>

            <div className="border rounded-xl p-3 flex flex-col cursor-pointer  transition-all duration-500">
                <div className="relative flex justify-center items-center w-48 h-48 md:w-64 md:h-64 ">
                    <img src={imageUrl} alt="" className="rounded-md w-48 h-48 md:w-64 md:h-64" onError={handleImageError}  />
                </div>
                <Button text="Add to Cart" position={"justify-end mx-3"} className={"bg-black hover:bg-black/80"} onClick={() => handleAddToCart(item)} />
            </div>

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default Card