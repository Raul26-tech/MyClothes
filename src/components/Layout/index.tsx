import { ReactNode, useCallback, useState } from 'react';
import Container from '../Container';
import Header from '../Header';
import Menu from '../Menu';

interface ILayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
    const [isOpen, setIsOpen] = useState(false);

    const openClose = useCallback(
        () => setIsOpen((prevState) => !prevState),
        []
    );

    return (
        <div className="w-screen h-screen relative">
            <div className="flex flex-row h-full">
                <Menu isOpen={isOpen} openClose={openClose} />
                <div className="w-64 h-full flex flex-col flex-1 bg-red-300"></div>
                <Header openMenu={openClose} />
                <Container>{children}</Container>
            </div>
        </div>
    );
}
