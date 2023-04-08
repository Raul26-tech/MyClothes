import { useState } from 'react';
import Content from '../../components/Content';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import Slider from '../../components/Slider';

import placaComputador from '../../assets/placa.jpg';
import processador from '../../assets/processador.jpg';
import memoria from '../../assets/rgb_hyperx.jpg';
import Categories from '../../components/Categories';

export default function Main() {
    const [current, setCurrent] = useState(0);

    const slideOfers = [
        {
            url: `${placaComputador}`,
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Quaerat veniam consequuntur in',
        },
        {
            url: `${processador}`,
            description:
                'Dolorum deserunt quisquam voluptate, consequatur fugiat deleniti recusandae asperiores explicabo mollitia perspiciatis quibusdam iusto nam laboriosam omnis ipsa.',
        },
        {
            url: `${memoria}`,
            description:
                'Dolorum deserunt quisquam voluptate, consequatur fugiat deleniti recusandae asperiores explicabo mollitia perspiciatis quibusdam iusto nam laboriosam omnis ipsa',
        },
    ];

    const prevSlide = () => {
        const currentIndex = current === 0;
        const currentValue = (currentIndex as unknown as number)
            ? slideOfers.length - 1
            : (currentIndex as unknown as number) + 1;
        setCurrent(currentValue);
    };

    const nextSlide = () => {
        const currentIndex = current === slideOfers.length - 1;
        const currentValue = currentIndex
            ? 0
            : (current as unknown as number) + 1;
        setCurrent(currentValue);
    };

    return (
        <Layout>
            <Content>
                <Banner />
                <div className="w-full flex justify-center items-center p-6">
                    <span className="text-lg text-slate-800 font-bold md:text-3xl">
                        Ofertas da semana
                    </span>
                </div>
                <Slider
                    addClassName="mt-6 p-8"
                    prevSlide={prevSlide}
                    nextSlide={nextSlide}
                >
                    <div
                        style={{
                            backgroundImage: `url(${slideOfers[current].url})`,
                        }}
                        className="w-full h-[20rem] p-1 bg-center bg-contain bg-no-repeat rounded-md shadow-2xl transition duration-700"
                    >
                        <div className="hidden md:w-3/12 md:flex justify-center items-center whitespace-normal text-sm text-slate-700 p-3 hover:text-black">
                            <span>{slideOfers[current].description}</span>
                        </div>
                    </div>
                </Slider>
                <Categories />
            </Content>
        </Layout>
    );
}
