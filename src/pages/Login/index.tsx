import { useContext } from 'react';
import Titles from '../../components/Titles';
import { MainContext } from '../../contexts/MainContext';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/Buttom';

interface IFormProps {
    email: string;
    password: string;
}

export default function Login() {
    const { signIn } = useContext(MainContext);

    const { register, handleSubmit, formState } = useForm<IFormProps>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

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
                            <div className="w-full h-full flex flex-col p-3 space-y-2  items-center">
                                <form className="w-full">
                                    <Input
                                        label="E-mail"
                                        {...register('email')}
                                        error={formState.errors.email}
                                    />
                                    <Input
                                        label="Senha"
                                        {...register('password')}
                                        error={formState.errors.password}
                                    />
                                </form>
                                <Button
                                    pattern="primary"
                                    type="submit"
                                    addClassName="text-white md:w-full"
                                >
                                    Entrar
                                </Button>
                                <div className="w-full flex justify-end items-center">
                                    <Link to="/" className="text-xs">
                                        Você ainda não possui conta ?{' '}
                                        <strong className="text-theme-blue-50 underline">
                                            Então criei uma!
                                        </strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
