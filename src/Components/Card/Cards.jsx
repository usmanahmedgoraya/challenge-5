/* eslint-disable react/prop-types */
import Card from "./Card"

const Cards = ({ products }) => {
    return (
        <div className="flex justify-start flex-wrap gap-4 items-center">
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