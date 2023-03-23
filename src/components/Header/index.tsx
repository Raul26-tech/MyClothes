import { BsCart3 } from 'react-icons/bs';
import { TiUser } from 'react-icons/ti';
import { HiMenu } from 'react-icons/hi';

interface IHeaderProps {
    openMenu: () => void;
}

export default function Header({ openMenu }: IHeaderProps) {
    return (
        <>
            <header className="w-full h-16 md:h-20 p-3 flex justify-end firs items-center shadow-xl">
                <button className="w-full h-full flex justify-start items-center p-6">
                    <HiMenu size={30} onClick={openMenu} />
                </button>
                <div className="w-full flex justify-end items-center">
                    <div className="h-auto flex justify-end items-center md:p-2 space-x-5">
                        <div className="flex w-[2rem] md:w-12 h-[2rem] md:h-12">
                            <div className="w-full flex justify-center items-center bg-theme-blue-50 p-2 rounded-full">
                                <TiUser className="w-full h-9 md:h-12 text-white" />
                            </div>
                        </div>
                        <div className="w-12 flex justify-center items-center p-3">
                            <BsCart3 size={20} className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
