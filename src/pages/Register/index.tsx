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
        //
        Register
    );
}
