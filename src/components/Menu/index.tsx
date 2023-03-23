import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';

interface IItemProps {
    text?: string;
    url: string;
    children: ReactNode;
}

export function Item({ children, url }: IItemProps) {
    return (
        <Link
            to={`${url}`}
            className="flex justify-center items-center space-x-3"
        >
            {children}
        </Link>
    );
}

interface IHeaderMenuProps {
    openClose?: () => void;
}

function HeaderMenu({ openClose }: IHeaderMenuProps) {
    return (
        <div className="w-full h-20 flex justify-end items-center px-2 bg-theme-blue-50">
            <button
                onClick={openClose}
                className="w-full flex justify-end items-end p-6"
            >
                <HiX className="text-white" size={30} />
            </button>
        </div>
    );
}

interface IMenuProps {
    isOpen: boolean;
    openClose?: () => void;
}

export default function Menu({ isOpen = false, openClose }: IMenuProps) {
    return (
        <>
            <div
                className={`w-60 h-screen flex flex-col absolute ${
                    !isOpen ? '-translate-x-full' : undefined
                } transition inset-0 z-40 duration-300 ease-out bg-theme-blue-50 shadow-xl`}
            >
                <HeaderMenu openClose={openClose} />
            </div>
        </>
    );
}
