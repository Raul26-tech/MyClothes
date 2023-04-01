import Content from '../../components/Content';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import Slider from '../../components/Slider';
import { useCallback, useRef } from 'react';

export default function Main() {
    const carousel = useRef();

    const handleScroolview = useCallback(() => {
        console.log('Cliquei');
    }, []);

    return (
        <Layout>
            <Content>
                <Banner />
                <Slider addClassName="mt-6" forNext={handleScroolview}>
                    <div className="w-[15rem] flex h-40 bg-white shadow-2xl">
                        Teste
                    </div>
                    <div className="w-[15rem] flex h-40 bg-white shadow-2xl">
                        Teste
                    </div>
                    <div className="w-[15rem] flex h-40 bg-white shadow-2xl">
                        Teste
                    </div>
                    <div className="w-[15rem] flex h-40 bg-white shadow-2xl">
                        Teste
                    </div>
                    <div className="w-[15rem] flex h-40 bg-white shadow-2xl">
                        Teste
                    </div>
                    <div className="w-[15rem] flex h-40 bg-white shadow-2xl">
                        Teste
                    </div>
                    <div className="w-[15rem] flex h-40 bg-white shadow-2xl">
                        Teste
                    </div>
                    <div className="w-[15rem] flex h-40 bg-white shadow-2xl">
                        Teste
                    </div>
                    <div className="w-[15rem] flex h-40 bg-white shadow-2xl">
                        Teste
                    </div>
                    <div className="w-[15rem] flex h-40 bg-white shadow-2xl">
                        Teste
                    </div>
                    <div className="w-[15rem] flex h-40 bg-white shadow-2xl">
                        Teste
                    </div>
                    <div className="w-[15rem] flex h-40 bg-white shadow-2xl">
                        Teste
                    </div>
                    <div className="w-[15rem] flex h-40 bg-white shadow-2xl">
                        Teste
                    </div>
                    <div className="w-[15rem] flex h-40 bg-white shadow-2xl">
                        Teste
                    </div>
                </Slider>
            </Content>
        </Layout>
    );
}
