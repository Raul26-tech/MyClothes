import { ReactNode } from 'react';

interface ITitles {
    children: ReactNode;
    addClassNameContainer?: string;
    addClassName?: string;
}

export default function Titles({
    children,
    addClassName,
    addClassNameContainer,
}: ITitles) {
    return (
        <div
            className={`w-full flex justify-center items-center p-6 ${addClassNameContainer}`}
        >
            <span
                className={`text-lg text-slate-800 font-bold md:text-3xl ${addClassName}`}
            >
                {children}
            </span>
        </div>
    );
}
