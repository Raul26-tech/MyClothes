import { useContext } from 'react';
import Titles from '../../components/Titles';
import { MainContext } from '../../contexts/MainContext';
import { Input } from '../../components/Input';

export default function Login() {
    const { signIn } = useContext(MainContext);

    return (
        <>
            <div className="w-screen h-screen p-20">
                <div className="w-full h-full flex rounded-xl shadow-2xl">
                    <div className="w-full h-full md:bg-[url('../assets/e-commerce-technology.gif')] bg-no-repeat bg-cover bg-center rounded-l-xl opacity-95"></div>
                    <div className="w-3/4 flex flex-col p-6 ">
                        <Titles>MyStore</Titles>
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <span className="font-montserra font-semibold text-slate-600">
                                Acesse sua conta
                            </span>
                            <div className="w-full h-full p-3 justify-start items-center">
                                <Input label="E-mail" disabled />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
