import Content from '../../components/Content';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import Slider from '../../components/Slider';
import { useCallback, useRef } from 'react';

export default function Main() {
    const handleScroolview = useCallback(() => {
        console.log('');
    }, []);

    return (
        <Layout>
            <Content>
                <Banner />
                <Slider addClassName="mt-6" forNext={handleScroolview}>
                    teste
                </Slider>
            </Content>
        </Layout>
    );
}
