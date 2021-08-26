import loader from '../assets/loader.gif'

export default function Loading() {
    return (
        <>
        <div className="flex justify-center">
            <div className="w-[15rem] h-[15rem]">
                <img src={loader} alt="" />
            </div>
        </div>
        </>
    )
}