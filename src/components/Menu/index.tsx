import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import { BsCart3 } from 'react-icons/bs';
import { TbCategory } from 'react-icons/tb';
import { BiUser } from 'react-icons/bi';
import { VscSignOut } from 'react-icons/vsc';
import Button from '../Buttom';

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
        <>
            <div className="w-full h-full flex flex-col justify-between items-center">
                <div className="w-full h-20 flex justify-end items-center px-2 bg-theme-blue-50">
                    <button
                        onClick={openClose}
                        className="w-full flex justify-end items-end p-6"
                    >
                        <HiX className="text-white" size={30} />
                    </button>
                </div>
                <nav className="w-full h-full flex flex-col items-center">
                    <ul className="w-full h-full flex flex-col justify-start items-start space-y-5 p-10 text-white text-lg">
                        <li className="w-full">
                            <Link to="/products">
                                <div className="w-full flex justify-between items-center space-x-5">
                                    <span>Produtos</span>
                                    <BsCart3 size={25} />
                                </div>
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link to="/">
                                <div className="w-full flex justify-between items-center space-x-5">
                                    <span>Categorias</span>
                                    <TbCategory size={25} />
                                </div>
                            </Link>
                        </li>
                        <li className="w-full">
                            <Link to="/">
                                <div className="w-full flex justify-between items-center space-x-5">
                                    <span>Meu perfil</span>
                                    <BiUser size={25} />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="w-full h-20 p-3 flex justify-center items-center">
                    <Button addClassName="w-20 text-white space-x-1 p-2 border-0">
                        <Link to="/login">Sair</Link>
                        <VscSignOut size={30} />
                    </Button>
                </div>
            </div>
        </>
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
