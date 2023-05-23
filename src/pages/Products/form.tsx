import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import Content from '../../components/Content';
import Titles from '../../components/Titles';
import Button from '../../components/Buttom';
import { BsCart3 } from 'react-icons/bs';
import { useBuyCart } from '../../hooks/useBuyCart';
import { IProduct } from '../../contexts/BuyCartContext';
import { useForm } from 'react-hook-form';

export default function FormProduts() {
    const { id } = useParams();
    const { addProdutCart } = useBuyCart();
    const [productRequest, setProductRequest] = useState<IProduct>();

    const { reset } = useForm<IProduct>();

    useEffect(() => {
        api.get<IProduct>(`/products/${id}`)
            .then((response) => {
                console.log();
                setProductRequest({
                    id: response.data.id,
                    category: response.data.category,
                    description: response.data.description,
                    name: response.data.name,
                    observantion: response.data.observantion,
                    price: response.data.price,
                    avaliation: response.data.avaliation,
                    picture: response.data.picture,
                });
                reset({
                    ...response.data,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <Layout>
            <Content>
                <div className="w-full h-full p-3 grid md:grid-cols-2 flex-col border-[1px] border-slate-300">
                    <div className="w-full h-full justify-center items-center">
                        <Titles>{productRequest?.category}</Titles>
                        <div className="flex justify-center items-center p-3">
                            <picture>
                                <img
                                    src={productRequest?.picture}
                                    alt="Imagem do produto"
                                    className="w-[20rem] h-52 md:h-80 bg-cover bg-center"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center p-3 bg-slate-100 rounded-md">
                        <section className="w-full h-full flex flex-col justify-start items-center p-3">
                            <Titles>{productRequest?.name}</Titles>
                            <p className="text-slate-700 text-lg">
                                {productRequest?.description}
                            </p>
                            <span className="text-2xl text-orange-400 mt-6">
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(Number(productRequest?.price))}
                            </span>
                        </section>
                        <div className="w-full h-full flex flex-col justify-end p-6 space-y-3 bg-orange">
                            <Button
                                pattern="secondary"
                                addClassName="text-white hover:bg-orange-800"
                            >
                                Comprar agora
                            </Button>
                            <Button
                                pattern="secondary"
                                onClick={() => {
                                    addProdutCart(productRequest as IProduct);
                                }}
                                addClassName="text-white space-x-3 hover:bg-orange-800"
                            >
                                <span>Adicionar ao carrinho</span>
                                <BsCart3 size={25} className="text-white" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Content>
        </Layout>
    );
}
