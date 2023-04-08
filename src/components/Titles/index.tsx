import { ReactNode } from 'react';

interface ITitles {
    children: ReactNode;
}

export default function Titles({ children }: ITitles) {
    return (
        <div className="w-full flex justify-center items-center p-6">
            <span className="text-lg text-slate-800 font-bold md:text-3xl">
                {children}
            </span>
        </div>
    );
}
