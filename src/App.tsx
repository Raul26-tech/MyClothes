import { MainProvider } from './contexts/MainContext';
import Main from './pages/Main';

function App() {
    return (
        <MainProvider>
            <Main />
        </MainProvider>
    );
}

export default App;
