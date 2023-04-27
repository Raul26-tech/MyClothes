import { useEffect, useState } from 'react';
import Content from '../../components/Content';
import Layout from '../../components/Layout';
import { api } from '../../services/api';
import Cards from '../../components/Cards';

interface IProductProps {
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
                <Cards />
            </Content>
        </Layout>
    );
}
