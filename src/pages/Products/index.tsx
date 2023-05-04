import { useCallback, useEffect, useState } from 'react';
import Content from '../../components/Content';
import Layout from '../../components/Layout';
import { api } from '../../services/api';
import Cards from '../../components/Cards';
import Banner from '../../components/Banner';
import { useNavigate } from 'react-router-dom';

export interface IProductProps {
    id: string;
    name: string;
    description: string;
    avaliation?: string;
    price: number;
    picture: string;
}

export default function Products() {
    const navigate = useNavigate();
    const [products, setProducts] = useState<IProductProps[]>([]);

    useEffect(() => {
        api.get<IProductProps[]>(`/products`)
            .then((response) => {
                setProducts(response.data);
                console.log(JSON.stringify(response.data, null, 2));
            })
            .catch((e) => console.log(e));
    }, []);

    const handleClickLine = useCallback((id: string) => {
        navigate(`/products/form/${id}`);
    }, []);

    return (
        <Layout>
            <Content>
                <Banner
                    title="Nossos produtos"
                    addClassName="md:h-[5rem] flex justify-center items-center"
                />
                <div className="w-full h-[25rem] flex overflow-auto p-6 gap-x-10">
                    {products.map(
                        ({
                            description,
                            id,
                            name,
                            price,
                            picture,
                            avaliation,
                        }) => (
                            <Cards
                                picture={picture}
                                price={price}
                                name={name}
                                title="Adicionar ao carrinho"
                                onClickLine={() => {
                                    handleClickLine(id);
                                }}
                            />
                        )
                    )}
                </div>
            </Content>
        </Layout>
    );
}
