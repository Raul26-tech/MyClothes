import { useEffect, useState } from 'react';
import Content from '../../components/Content';
import Layout from '../../components/Layout';
import { api } from '../../services/api';
import Cards from '../../components/Cards';
import Banner from '../../components/Banner';

export interface IProductProps {
    id: string;
    name: string;
    avaliation?: string;
    price: number;
    url: string;
    description: string;
}

export default function Products() {
    const [products, setProducts] = useState<IProductProps[]>([]);

    useEffect(() => {
        api.get<IProductProps[]>(`/products`)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <Layout>
            <Content>
                <Banner
                    title="Nossos produtos"
                    addClassName="md:h-[5rem] flex justify-center items-center"
                />
                <div className="w-full h-[20rem] flex bg-green-300  overflow-x-auto p-6 gap-1">
                    {products.map(
                        ({ description, id, name, price, url, avaliation }) => (
                            <Cards key={id} />
                        )
                    )}
                </div>
            </Content>
        </Layout>
    );
}
