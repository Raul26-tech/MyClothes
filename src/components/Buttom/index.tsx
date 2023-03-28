import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const COLORS = {
    default:
        'bg-theme-blue border-2 border-solid-theme-green-50 hover:bg-theme-blue-50-hover',
    primary: '',
    secondary: '',
    danger: '',
    success: '',
    warning: '',
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
}: IButtomProps) {
    return (
        <div
            className={`w-auto h-12 flex justify-center items-center p-3 rounded-md cursor-pointer ${addClassName} ${COLORS[pattern]}`}
        >
            {children}
        </div>
    );
}

interface IButtonLink extends LinkProps {
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
}

export function ButtonLink({
    children,
    pattern = 'default',
    className = `w-auto h-12 flex justify-center items-center p-3 rounded-md cursor-pointer ${COLORS[pattern]}`,
    addClassName,
    ...rest
}: IButtonLink) {
    return (
        <Link className={` ${addClassName} `} {...rest}>
            {children}
        </Link>
    );
}
