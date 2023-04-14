import Titles from '../../components/Titles';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/Buttom';
import { useAuth } from '../../contexts/useAuth';

interface IFormProps {
    email: string;
    password: string;
}

export default function Login() {
    const { register, handleSubmit, formState } = useForm<IFormProps>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const { signIn } = useAuth();

    const handleSignIn: SubmitHandler<IFormProps> = async ({
        email,
        password,
    }) => {
        signIn(email, password);
    };

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
                                <form
                                    className="w-full"
                                    onSubmit={handleSubmit(handleSignIn)}
                                >
                                    <Input
                                        label="E-mail"
                                        {...register('email', {
                                            required: true,
                                        })}
                                        error={formState.errors.email}
                                    />
                                    <Input
                                        label="Senha"
                                        {...register('password', {
                                            required: true,
                                        })}
                                        type="password"
                                        autoComplete="off"
                                        error={formState.errors.password}
                                    />
                                    <Button
                                        pattern="primary"
                                        type="submit"
                                        addClassName="text-white md:w-full"
                                    >
                                        Entrar
                                    </Button>
                                </form>
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
