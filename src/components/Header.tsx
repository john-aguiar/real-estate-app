import { MenuIcon } from '@heroicons/react/solid';
import { BellIcon } from '@heroicons/react/outline';
import GoGuestImg from "../images/logo-goguests.png"

export const Header = () => {
    return(
        <div className="bg-emerald-550 h-20 w-full flex justify-between items-center p-2  border-b-2 border-zinc-400">
            <MenuIcon className='h-9 w-9'/>
            <img className=" h-10" src={GoGuestImg} alt="" />
            <BellIcon className='h-6 w-6' />
        </div>
    )
}