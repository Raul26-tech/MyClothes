import { MainProvider } from './contexts/MainContext';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
    return (
        <>
            <BrowserRouter>
                <MainProvider>
                    <Routes />
                </MainProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
