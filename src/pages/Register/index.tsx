import { SubmitHandler, useForm } from 'react-hook-form';
import Titles from '../../components/Titles';
import { Input } from '../../components/Input';
import { useCallback, useEffect, useState } from 'react';
import Button from '../../components/Buttom';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

interface IViaCep {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

interface IRegisterProps {
    id: string;
    name: string;
    email: string;
    emailConfirm: string;
    password: string;
    passwordConfirm: string;
    postalCode: string;
    address: {
        street: string;
        number: string;
        uf: string;
        district: string;
        city: string;
    };
}

export default function Register() {
    const navigate = useNavigate();
    const [accountAddress, setAccountAddress] = useState(false);
    const [dataAccount, setDataAccount] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {
        register,
        handleSubmit,
        formState,
        reset,
        getValues,
        setFocus,
        watch,
    } = useForm<IRegisterProps>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            postalCode: '',
            address: {
                street: '',
                number: '',
                district: '',
                city: '',
                uf: '',
            },
        },
    });

    const handleSaveRegister: SubmitHandler<IRegisterProps> = async (
        submitData
    ) => {
        try {
            await api.post('/users', {
                ...submitData,
                name,
                email,
                password,
            });
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    };

    const handleGetPostalCode = useCallback(() => {
        const postalCode = getValues('postalCode');

        if (postalCode && postalCode.length === 8) {
            api.get<IViaCep>(`https://viacep.com.br/ws/${postalCode}/json/`)
                .then((response) => {
                    reset({
                        address: {
                            street: response.data.logradouro,
                            district: response.data.bairro,
                            city: response.data.localidade,
                            uf: response.data.uf,
                        },
                    });
                    setFocus('address.number');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);

    return (
        <div className="w-screen h-screen md:p-20 flex justify-center items-center">
            <div className="md:w-full md:h-full flex rounded-xl shadow-2xl">
                <div className="hidden md:block max-w-2/3 w-3/4 h-full md:bg-[url('../assets/e-commerce-technology.gif')] bg-no-repeat bg-cover bg-center p-16  rounded-l-xl opacity-95" />
                <div className="w-full h-full flex flex-col justify-start items-center">
                    <Titles>MyStore</Titles>
                    <span className="font-montserra font-semibold text-slate-600">
                        Crie sua conta
                    </span>
                    <form
                        className="grid md:gap-x-4 gap-y-2 p-3"
                        onSubmit={handleSubmit(handleSaveRegister)}
                    >
                        {dataAccount && (
                            <>
                                <Input
                                    label="Nome completo"
                                    {...register('name')}
                                    addClassName="md:col-span-2"
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    error={formState.errors.name}
                                />
                                <Input
                                    label="Email"
                                    {...register('email')}
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={formState.errors.email}
                                />
                                <Input
                                    label="Confirmação de E-mail"
                                    {...register('emailConfirm')}
                                    error={formState.errors.emailConfirm}
                                />
                                <Input
                                    label="Senha"
                                    {...register('password')}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    type="password"
                                    error={formState.errors.password}
                                />
                                <Input
                                    label="Confirmação de senha"
                                    {...register('passwordConfirm')}
                                    type="password"
                                    error={formState.errors.passwordConfirm}
                                />
                            </>
                        )}

                        {accountAddress && (
                            <div className="grid md:grid-cols-2 md:gap-x-5 gap-y-2 p-3">
                                <Input
                                    label="Cep"
                                    {...register('postalCode', {
                                        onBlur: handleGetPostalCode,
                                    })}
                                    placeholder="Digite o cep"
                                    maxLength={8}
                                    error={formState.errors.postalCode}
                                />
                                <Input
                                    label="Rua"
                                    {...register('address.street')}
                                    error={formState.errors.address?.street}
                                    disabled
                                />
                                <Input
                                    label="Número"
                                    {...register('address.number')}
                                    error={formState.errors.address?.number}
                                />
                                <Input
                                    label="Bairro"
                                    {...register('address.district')}
                                    error={formState.errors.address?.district}
                                    disabled
                                />
                                <Input
                                    label="Cidade"
                                    {...register('address.city')}
                                    error={formState.errors.address?.city}
                                    disabled
                                />
                                <Input
                                    label="UF"
                                    {...register('address.uf')}
                                    error={formState.errors.address?.uf}
                                    disabled
                                />
                            </div>
                        )}
                        {accountAddress && (
                            <div className="w-full flex justify-between p-3">
                                <Button
                                    pattern="primary"
                                    addClassName="w-3/2 md:w-[6rem] text-white"
                                    type="button"
                                    onClick={() => {
                                        setAccountAddress(false);
                                        setDataAccount(true);
                                        reset({});
                                    }}
                                >
                                    <HiArrowNarrowLeft />
                                </Button>
                                <Button
                                    pattern="primary"
                                    addClassName="text-white"
                                    type="submit"
                                >
                                    Cadastrar
                                </Button>
                            </div>
                        )}
                        {dataAccount && (
                            <div className="w-full flex justify-between">
                                <Button
                                    pattern="primary"
                                    addClassName="w-3/2 md:w-[6rem] text-white"
                                    type="button"
                                    onClick={() => {
                                        navigate('/login');
                                    }}
                                >
                                    Voltar
                                </Button>
                                <Button
                                    pattern="primary"
                                    addClassName="w-3/2 md:w-[6rem] text-white"
                                    type="button"
                                    onClick={() => {
                                        setAccountAddress(true);
                                        setDataAccount(false);
                                    }}
                                >
                                    <HiArrowNarrowRight />
                                </Button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
