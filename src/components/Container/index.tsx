import React, { ReactNode } from 'react';

interface IContainerProps {
    children: ReactNode;
}

export default function Container({ children }: IContainerProps) {
    return <div className="flex-1 overflow-y-auto p-3">{children}</div>;
}
