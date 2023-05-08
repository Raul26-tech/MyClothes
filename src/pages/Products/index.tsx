import { useCallback, useEffect, useMemo, useState } from 'react';
import Content from '../../components/Content';
import Layout from '../../components/Layout';
import { api } from '../../services/api';
import Cards from '../../components/Cards';
import Banner from '../../components/Banner';
import { useNavigate } from 'react-router-dom';
import Titles from '../../components/Titles';
import Section from '../../components/Section';
import Footer from '../../components/Footer';

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
            })
            .catch((e) => console.log(e));
    }, []);

    const handleClickLine = useCallback((id: string) => {
        navigate(`/products/form/${id}`);
    }, []);

    const productsFiltered = useMemo(() => {
        return {
            smartphones: products.filter(
                (categories) => categories.category === 'smartphones'
            ),

            computers: products.filter(
                (categories) => categories.category === 'computers'
            ),

            headsets: products.filter(
                (categories) => categories.category === 'headsets'
            ),
        };
    }, [products]);

    return (
        <Layout>
            <Content>
                <Banner
                    title="Nossos produtos"
                    addClassName="h-[1rem] md:h-[2rem] flex justify-center items-center"
                />
                <Section addClassName="md:mb-[20rem]">
                    <Titles addClassName="w-full mb-3">Desktops</Titles>
                    <div className="w-full flex md:grid md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 overflow-x-auto p-3 gap-x-10 gap-y-5">
                        {productsFiltered.computers.map(
                            ({ id, name, price, picture, avaliation }) => (
                                <Cards
                                    key={id}
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
                    </div>
                </Section>
                <Section>
                    <Titles addClassName="w-full mb-3">Smartphones</Titles>
                    <div className="w-full flex md:grid md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 overflow-x-auto p-3 gap-x-10 gap-y-5">
                        {productsFiltered.smartphones.map(
                            ({ id, name, price, picture, avaliation }) => (
                                <Cards
                                    key={id}
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
                    </div>
                </Section>
                <Section addClassName="md:mb-[20rem]">
                    <Titles addClassName="w-full mb-3">Headseats</Titles>
                    <div className="w-full flex md:grid md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 overflow-x-auto p-3 gap-x-10 gap-y-5">
                        {productsFiltered.headsets.map(
                            ({ id, name, price, picture, avaliation }) => (
                                <Cards
                                    key={id}
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
                    </div>
                </Section>
                <Footer
                    addClassName="border-2 border-white border-t-theme-blue-50"
                    addColorTitle="text-black"
                >
                    <span className="text-theme-blue-50">
                        &copy; 2023 | Todos os direitos são reservados - Raul
                        Santos
                    </span>
                </Footer>
            </Content>
        </Layout>
    );
}
