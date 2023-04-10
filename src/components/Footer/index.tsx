import { ReactNode } from 'react';

interface IFooterProps {
    children: ReactNode;
    addClassName?: string;
}

export default function Footer({ children, addClassName }: IFooterProps) {
    return (
        <div
            className={`w-full h-12 mt-12 md:h-20 flex justify-center items-center p-6 ${addClassName}`}
        >
            <span className="text-theme-blue-50 text-center text-sm">
                {children}
            </span>
        </div>
    );
}
