import { useEffect, useState } from "react";
import Cards from "./Card/Cards"
import Pagination from '@mui/material/Pagination';

const Products = () => {
    const [products, setProducts] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    const TotalProducts = async() =>{
        const res = await fetch(`https://api.escuelajs.co/api/v1/products`, {
            method: "get"
        })
        const data = await res.json()
        setTotalPages(Math.floor(data.length/10))
        console.log(Math.floor(data.length/10))
    }
    const fetchProducts = async (num) => {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${num*10}&limit=10`, {
            method: "get"
        })
        const data = await res.json()
        setProducts(data)
        console.log(data)
    }

    
    useEffect(() => {
        TotalProducts()
        fetchProducts(1)
    }, [])

    const handlePaginationNumber = (e) =>{
        fetchProducts(e.currentTarget.textContent)
    }

   
    return (
        <div className='w-full min-h-screen flex flex-col items-start justify-center px-8 py-8 '>
            <div className="my-5 w-full flex md:justify-start justify-center">
            <h1 className=" text-4xl font-bold  text-center">Shopping</h1>
            </div>
            <Cards products={products} />
            <div className="w-full flex justify-center my-8">
                <Pagination count={totalPages} shape="rounded" onChange={handlePaginationNumber} />
            </div>
        </div>
    )
}

export default Products