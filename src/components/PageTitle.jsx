export default function PageTitle({page}) {
    return (
        <>
        <div className="flex flex-col items-center mt-[15%] text-center">
            <div className="w-[30rem]">
                <p className="text-4xl text-gray-500 font-semibold uppercase tracking-widest">This is {page} page</p>
                <hr className="text-gray-400 mt-4" />
            </div>
        </div>
        </>
    )
}