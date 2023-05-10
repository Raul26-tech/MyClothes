import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import Content from '../../components/Content';
import { IProductProps } from '../../components/Cards';
import Container from '../../components/Container';
import Titles from '../../components/Titles';

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
                <div className="w-full h-full p-3 grid md:grid-cols-2 flex-col border-[1px] border-slate-300">
                    <div className="w-full h-full justify-center items-center">
                        <Titles>{productRequest?.name}</Titles>
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
                </div>
            </Content>
        </Layout>
    );
}
