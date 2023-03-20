import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FaProductHunt } from 'react-icons/fa';
import styles from './styles.module.css';

interface IItemProps {
    text: string;
    url: string;
    children: ReactNode;
}

export function Item({ children, text, url }: IItemProps) {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center bg-slate-600">
            <div className="">{children}</div>
            {/* <Link to={`${url}`}>{text}</Link> */}
        </div>
    );
}

export default function Menu() {
    return (
        <>
            <div className={styles.menu}>
                <div className="w-full h-full p-2 flex  justify-center item bg-red-300">
                    Menu aqui
                </div>
            </div>
        </>
    );
}
