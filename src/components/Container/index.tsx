import React, { ReactNode } from 'react';

interface IContainerProps {
    children: ReactNode;
    addClassName?: string;
}

export default function Container({ addClassName, children }: IContainerProps) {
    return (
        <div className={`flex-1 overflow-y-auto p-3 ${addClassName}`}>
            {children}
        </div>
    );
}
