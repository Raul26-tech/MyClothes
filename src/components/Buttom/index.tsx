import React, { ButtonHTMLAttributes, ReactNode } from 'react';

const COLORS = {
    default:
        'bg-theme-blue transition duration-400 border-2 border-theme-green-50 hover:bg-theme-blue-50-hover',
    primary:
        'bg-primary transition duration-400 border-2 border-white hover:bg-theme-blue-50',
    secondary:
        'bg-secondary transition duration-400 border-2 hover:border-orange-500',
    danger: 'bg-danger transition duration-400 border-2 hover:border-red-600',
    success:
        'bg-success transition duration-400 border-2 hover:border-green-600',
    warning:
        'bg-warning transition duration-400 border-2 hover:border-yellow-400',
};

interface IButtomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    pattern?:
        | 'default'
        | 'primary'
        | 'secondary'
        | 'danger'
        | 'success'
        | 'warning';
    addClassName?: string;
}

export default function Button({
    children,
    pattern = 'default',
    addClassName = '',
    ...rest
}: IButtomProps) {
    return (
        <button
            className={`w-auto h-12 flex justify-center items-center p-3 rounded-md cursor-pointer ${addClassName} ${COLORS[pattern]}`}
            {...rest}
        >
            {children}
        </button>
    );
}

interface IButtonLink {
    children: ReactNode;
    className?: string;
    pattern?:
        | 'default'
        | 'primary'
        | 'secondary'
        | 'danger'
        | 'success'
        | 'warning';
    addClassName?: string;
    url?: string;
}

export function ButtonLink({
    children,
    pattern = 'default',
    className = `w-auto h-12 flex justify-center items-center p-3 rounded-md cursor-pointer ${COLORS[pattern]}`,
    addClassName,
    url = '',
}: IButtonLink) {
    return (
        <button className={` ${className} ${addClassName} `}>
            <a href={url}>{children}</a>
        </button>
    );
}
