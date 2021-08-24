export default function ProductCard({product}) {
    return (
        <>
        <div className="flex flex-col items-center mb-5 text-center relative h-[25.5rem]">
            <div className="w-[18rem] h-[18rem]">
                <img src={product.image} alt="" />
            </div>
            <div className="text-xs mt-5 w-[17rem] font-semibold tracking-widest">
                <p>{product.name}</p>
            </div>
            <div className="bg-black text-white text-xs rounded-md p-2.5 absolute bottom-0">
                <button type="button"> 
                    <p className="font-semibold tracking-widest">ADD TO CART</p>
                </button>
            </div>
        </div>
        </>
    )
}