import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import Content from '../../components/Content';
import { IProductProps } from '../../components/Cards';
import Container from '../../components/Container';

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
                {/* <Container addClassName="border-[1px] border-slate-200">
                    <div className="">Teste</div>
                </Container> */}
            </Content>
        </Layout>
    );
}
