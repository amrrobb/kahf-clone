export default function CartItem({item}) {
    return (
        <>
        <div>
            <div className="flex justify-start items-start">
                <div className="w-[5.75rem] h-[5.75rem] p-3">
                    <img src={item.image} alt="" />
                </div>
                <p className="text-xs text-gray-500 font-semibold tracking-widest">{item.name}</p>
            </div>
            <hr className="text-gray-400" />
        </div>
        </>
    )
}