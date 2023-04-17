import { useForm } from 'react-hook-form';
import Titles from '../../components/Titles';
import { Input } from '../../components/Input';
import Content from '../../components/Content';
import { useState } from 'react';
import Button from '../../components/Buttom';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

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
    const [accountAddress, setAccountAddress] = useState(false);
    const [dataAccount, setDataAccount] = useState(true);

    const { register, handleSubmit, formState, reset, getValues } =
        useForm<IRegisterProps>({
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

    return (
        <div className="w-screen h-screen md:p-20 flex justify-center items-center">
            <div className="md:w-full md:h-full flex rounded-xl shadow-2xl">
                <div className="hidden md:block max-w-2/3 w-2/3 h-full md:bg-[url('../assets/e-commerce-technology.gif')] bg-no-repeat bg-cover bg-center p-16  rounded-l-xl opacity-95" />
                <div className="w-full h-full flex flex-col justify-start items-center">
                    <Titles>MyStore</Titles>
                    <form className="grid md:gap-x-5 gap-y-2 p-3">
                        <span className="font-montserra font-semibold text-slate-600">
                            Crie sua conta
                        </span>
                        {dataAccount && (
                            <>
                                <Input
                                    label="Nome completo"
                                    {...register('name')}
                                    addClassName="md:col-span-2"
                                    error={formState.errors.name}
                                />
                                <Input
                                    label="Email"
                                    {...register('email')}
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
                            <>
                                <Input
                                    label="Cep"
                                    {...register('postalCode')}
                                    error={formState.errors.postalCode}
                                />
                                <Input
                                    label="Rua"
                                    {...register('address.street')}
                                    error={formState.errors.address?.street}
                                    addClassName="md:col-span-2"
                                />
                                <Input
                                    label="Número"
                                    {...register('address.number')}
                                    error={formState.errors.address?.number}
                                />
                                <Input
                                    label="Bairro"
                                    {...register('address.district')}
                                    type="password"
                                    error={formState.errors.address?.district}
                                />
                                <Input
                                    label="Cidade"
                                    {...register('address.city')}
                                    type="password"
                                    error={formState.errors.address?.city}
                                    disabled
                                />
                                <Input
                                    label="UF"
                                    {...register('address.uf')}
                                    type="password"
                                    error={formState.errors.address?.uf}
                                    disabled
                                />
                            </>
                        )}
                    </form>
                    <div className="w-[15rem] md:w-[35rem] flex justify-end items-center mb-3">
                        {accountAddress && (
                            <Button
                                pattern="primary"
                                addClassName="w-2/12 text-white"
                                type="button"
                                onClick={() => {
                                    setAccountAddress(false);
                                    setDataAccount(true);
                                }}
                            >
                                <HiArrowNarrowLeft />
                            </Button>
                        )}
                        {dataAccount && (
                            <Button
                                pattern="primary"
                                addClassName="w-2/12 text-white"
                                type="button"
                                onClick={() => {
                                    setAccountAddress(true);
                                    setDataAccount(false);
                                }}
                            >
                                <HiArrowNarrowRight />
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
