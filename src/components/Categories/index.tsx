import Titles from '../Titles';
import { HiDesktopComputer } from 'react-icons/hi';
import { IoHeadset } from 'react-icons/io5';
import { MdSmartphone } from 'react-icons/md';

export default function Categories() {
    return (
        <>
            <Titles>Categorias</Titles>
            <div className="w-full p-6 rounded-lg shadow-2xl pt-5">
                <div className="h-auto md:h-80 p-6 flex flex-col justify-center items-center md:flex-row md:items-center md:justify-between rounded-2xl">
                    <div className="w-full h-full p-6 flex flex-col justify-center items-center cursor-pointer space-y-6 text-theme-blue-50 hover:bg-theme-blue-50 hover:text-white transition duration-200 shadow-md">
                        <span>Computadores</span>
                        <HiDesktopComputer size={60} />
                    </div>
                    <div className="w-full h-full p-6 flex flex-col justify-center items-center cursor-pointer space-y-6 text-theme-blue-50 hover:bg-theme-blue-50 hover:text-white transition duration-200 shadow-md">
                        <span>Headsets</span>
                        <IoHeadset size={60} />
                    </div>
                    <div className="w-full h-full p-6 flex flex-col justify-center items-center cursor-pointer space-y-6 text-theme-blue-50 hover:bg-theme-blue-50 hover:text-white transition duration-200 shadow-md">
                        <span>Smartphones</span>
                        <MdSmartphone size={60} />
                    </div>
                </div>
            </div>
        </>
    );
}
