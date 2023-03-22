import { useCallback, useState } from 'react';
import Container from '../Container';
import Header from '../Header';
import Menu from '../Menu';

export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);

    const openClose = useCallback(
        () => setIsOpen((prevState) => !prevState),
        []
    );

    return (
        <>
            <Container>
                <Menu isOpen={isOpen} openClose={openClose} />
                <Header openMenu={openClose} />
            </Container>
        </>
    );
}
