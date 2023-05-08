import { ReactNode } from 'react';

interface IFooterProps {
    children: ReactNode;
    addClassName?: string;
    addColorTitle?: string;
}

export default function Footer({
    children,
    addClassName,
    addColorTitle,
}: IFooterProps) {
    return (
        <footer
            className={`w-full h-12 mt-12 md:h-20 flex justify-center items-center p-6 ${addClassName}`}
        >
            <span
                className={`text-theme-blue-50 ${addColorTitle} text-center text-sm`}
            >
                {children}
            </span>
        </footer>
    );
}
