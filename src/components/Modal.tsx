import { ClockIcon } from "@heroicons/react/outline"

export const Modal = () => {
    return (
        <div className="bg-white absolute bottom-4 right-[50%] translate-x-2/4 border-2 shadow shadow-zinc-400 rounded-lg box- w-[90%] flex flex-col justify-center  text-center">

            <div className="p-1 flex text-center border-b-2">
                <div className="flex flex-col w-[50%] border-r-2">
                    <span className="text-zinc-600">Deposit Amout</span>
                    <span className="font-bold p-1">1375$</span>
                </div>
                <div className="flex flex-col w-[50%] text-center">
                    <span className="text-zinc-600">Deposit Status</span>
                    <span className="font-bold p-1">ACTIVE</span>
                </div>
            </div>

            <div className="py-2 px-4 flex items-center border-b-2">
               <ClockIcon className="text-red-700 bg-red-100 p-1 rounded-full w-6 h-6 mr-3"/>
               <div className="flex items-start flex-col">
                   <span className="text-zinc-400">Time left</span>
                   <span className="font-bold ">20 days 17 hours</span>
               </div>
            </div>


            <div className="flex flex-col p-3 items-center border-b-2">
                <button className="w-40 mb-2 bg-zinc-800 p-1 rounded-xl border-1 shadow shadow-zinc-400 text-white">Share property</button>
                <button className="w-40 border-2 border-zinc-800 p-1 rounded-xl border-1 shadow shadow-zinc-400 text-zinc-800">Create new deposit</button>
            </div>

            <div className="flex justify-between p-1"> 
                <h2>NEW DEPOSITS</h2>
                <i>i-down</i>
            </div>


        </div>
    )
}