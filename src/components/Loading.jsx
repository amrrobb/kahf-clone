import loader from '../assets/loader.gif'

export default function Loading() {
    return (
        <>
        <div className="flex justify-center">
            <div className="w-[5.75rem] h-[5.75rem]">
                <img src={loader} alt="" />
            </div>
        </div>
        </>
    )
}