import { useCallback, useRef, useState } from 'react';
import Content from '../../components/Content';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import Slider from '../../components/Slider';
import image1 from '../../assets/placa.jpg';
import image2 from '../../assets/processador.jpg';
import image3 from '../../assets/rgb_hyperx.jpg';

export default function Main() {
    const [current, setCurrent] = useState(0);

    const slide = [
        { url: `${image1}` },
        { url: `${image2}` },
        { url: `${image3}` },
    ];

    const prevSlide = () => {
        const currentIndex = current === 0;
        const currentValue = (currentIndex as unknown as number)
            ? slide.length - 1
            : (currentIndex as unknown as number) + 1;
        setCurrent(currentValue);
    };

    const nextSlide = () => {
        const currentIndex = current === slide.length - 1;
        const currentValue = currentIndex
            ? 0
            : (current as unknown as number) + 1;
        setCurrent(currentValue);
    };

    return (
        <Layout>
            <Content>
                <Banner />
                <Slider
                    addClassName="mt-6"
                    prevSlide={prevSlide}
                    nextSlide={nextSlide}
                >
                    <img
                        style={{
                            backgroundImage: `url(${slide[current].url})`,
                        }}
                        className="w-full h-[30rem] p-6 rounded-2xl bg-center bg-contain bg-no-repeat shadow-lg duration-500"
                    />
                </Slider>
            </Content>
        </Layout>
    );
}
