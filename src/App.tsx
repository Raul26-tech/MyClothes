import { MainContext, MainProvider } from './contexts/MainContext';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Login from './pages/Login';
import { useContext } from 'react';

function App() {
    const { user } = useContext(MainContext);

    // return (
    //     <>
    //         <Login />
    //     </>
    // );

    return (
        <BrowserRouter>
            <MainProvider>
                <Routes />
            </MainProvider>
        </BrowserRouter>
    );
}

export default App;
