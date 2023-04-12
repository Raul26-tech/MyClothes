import { useContext } from 'react';
import Titles from '../../components/Titles';
import { MainContext } from '../../contexts/MainContext';

export default function Login() {
    const { signIn } = useContext(MainContext);

    return (
        <>
            <div className="w-screen h-screen p-20">
                <div className="w-full h-full flex rounded-xl shadow-2xl">
                    <div className="w-full h-full md:bg-[url('../assets/e-commerce-technology.gif')] bg-no-repeat bg-cover bg-center rounded-l-md opacity-95"></div>
                    <div className="w-3/4 flex flex-col p-6 ">
                        <Titles>MyStore</Titles>
                        teste
                    </div>
                </div>
            </div>
        </>
    );
}
