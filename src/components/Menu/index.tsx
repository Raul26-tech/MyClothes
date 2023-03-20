import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface IItemProps {
    text: string;
    url: string;
    children: ReactNode;
}

export function Item({ children, text, url }: IItemProps) {
    return (
        <div className="w-full h-auto">
            <div className="">{children}</div>
            <Link to={`${url}`}>{text}</Link>
        </div>
    );
}

export default function Menu() {
    return (
        <>
            <div className={styles.menu}>
                <div className=""></div>
            </div>
        </>
    );
}
