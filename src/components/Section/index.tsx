import React, { ReactNode } from 'react';

interface ISection {
    children: ReactNode;
    addClassName?: string;
}

export default function Section({ children, addClassName }: ISection) {
    return (
        <div className={`w-full h-full p-6 ${addClassName}`}>{children}</div>
    );
}
