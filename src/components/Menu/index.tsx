import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BsFillBagFill } from 'react-icons/bs';
import styles from './styles.module.css';

interface IItemProps {
    text?: string;
    url: string;
    children: ReactNode;
}

export function Item({ children, url, text }: IItemProps) {
    return (
        <div className={styles.item}>
            <Link to={`${url}`}>{children}</Link>
            {text && <span>{text}</span>}
        </div>
    );
}

export default function Menu() {
    return (
        <div className={styles.menu}>
            <Item url="/" text="Produtos">
                <BsFillBagFill size={25} className="text-white" />
            </Item>
            <Item url="/" text="Produtos">
                <BsFillBagFill size={25} className="text-white" />
            </Item>
            <Item url="/" text="Produtos">
                <BsFillBagFill size={25} className="text-white" />
            </Item>
            <Item url="/" text="Produtos">
                <BsFillBagFill size={25} className="text-white" />
            </Item>
        </div>
    );
}
