import { useCallback, useEffect, useState } from 'react';
import Content from '../../components/Content';
import Layout from '../../components/Layout';
import { api } from '../../services/api';
import Cards from '../../components/Cards';
import Banner from '../../components/Banner';
import { useNavigate } from 'react-router-dom';
import Titles from '../../components/Titles';
import Section from '../../components/Section';

export interface IProductProps {
    id: string;
    name: string;
    description: string;
    avaliation?: string;
    price: number;
    picture: string;
    category?: string;
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
                    addClassName="md:h-[2rem] flex justify-center items-center"
                />
                <Titles addClassName="w-full mb-3">Desktops</Titles>
                <Section>
                    {/* <div className="w-full flex overflow-x-auto overflow-y-hidden p-3 gap-x-10"> */}
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
                                title="Comprar"
                                onClickLine={() => {
                                    handleClickLine(id);
                                }}
                            />
                        )
                    )}
                    {/* </div> */}
                </Section>
            </Content>
        </Layout>
    );
}
