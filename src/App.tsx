import { MainProvider } from './contexts/MainContext';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { BuyCartContext, BuyCartProvider } from './contexts/BuyCartContext';

function App() {
    return (
        <>
            <BrowserRouter>
                <MainProvider>
                    <BuyCartProvider>
                        <Routes />
                    </BuyCartProvider>
                </MainProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
