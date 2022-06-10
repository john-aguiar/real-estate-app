import { PencilIcon } from '@heroicons/react/solid';
import { ShareIcon } from '@heroicons/react/outline';
import { ArrowSmLeftIcon } from '@heroicons/react/outline';

export const ActionButtons = () => {

    return(
        <div className="flex justify-between items-center p-2">
            <div className='flex'>
                <ArrowSmLeftIcon className='text-zinc-400 w-6' />
                <span className='text-sm text-zinc-400 ml-1'>Back To Home</span>
            </div>
            <div className="flex">
               <ShareIcon className='w-8 h-8 rounded-[50%] border-2 p-1'/>
               <PencilIcon className='ml-3 w-8 h-8 rounded-[50%] border-2 p-1'/>
            </div>
        </div>
    )
}