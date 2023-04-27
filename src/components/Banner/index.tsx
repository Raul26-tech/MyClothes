import { ReactNode } from 'react';

interface IBannerProps {
    color?: string;
    addClassName?: string;
    className?: string;
    title: string;
    children: ReactNode;
}

export default function Banner({
    color = 'bg-theme-blue-50',
    className = `
    w-full 
    md:h-[20rem]
    rounded-md
    shadow-md
    p-8
    text-white
    font-roboto
    space-y-[3rem]
    mb-6
    `,
    addClassName,
    title,
    children,
}: IBannerProps) {
    return (
        <>
            <div className={`${className} ${color} ${addClassName} `}>
                <div className="w-full md:h-[5rem] flex justify-center items-center text-center ">
                    <span className="text-white font-bold text-3xl">
                        {title}
                    </span>
                </div>
                <div className="w-full flex flex-col justify-center items-center p-3 space-y-4">
                    {children}
                </div>
            </div>
        </>
    );
}
