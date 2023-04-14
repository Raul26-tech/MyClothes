import { ReactNode } from 'react';

interface IContentProps {
    children: ReactNode;
    addClassName?: string;
}

export default function Content({ children, addClassName }: IContentProps) {
    return (
        <div className={`flex-1 h-full p-5 flex flex-col ${addClassName}`}>
            {children}
        </div>
    );
}
