/* eslint-disable react/prop-types */
import Card from "./Card"

const Cards = ({ products }) => {
    return (
        <div className="flex md:justify-start justify-center flex-wrap gap-4 items-center">
            {
                products.map((item) => {
                    return (
                        <Card key={item.id} item={item} />
                    )
                })
            }
        </div>
    )
}

export default Cards