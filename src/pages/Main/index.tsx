import Content from '../../components/Content';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import Slider from '../../components/Slider';

interface IProductOfers {
    id: string;
    name: string;
    price: number;
    description: string;
}

export default function Main() {
    return (
        <Layout>
            <Content>
                <Banner />
                <Slider addClassName="mt-6">Teste</Slider>
            </Content>
        </Layout>
    );
}
