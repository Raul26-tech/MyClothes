import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import Content from '../../components/Content';
import { IProductProps } from '../../components/Cards';

export default function FormProduts() {
    const { id } = useParams();
    const [productRequest, setProductRequest] = useState<IProductProps>();

    useEffect(() => {
        api.get<IProductProps>(`/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProductRequest(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <Layout>
            <Content>
                <div className="">{productRequest?.name}</div>
            </Content>
        </Layout>
    );
}
