import { useState } from 'react';
import Banner from '../../components/Banner';
import Slider from '../../components/Slider';
import placaComputador from '../../assets/placa.png';
import processador from '../../assets/processador.png';
import memoria from '../../assets/rgb_hyperx.png';
import Categories from '../../components/Categories';
import Titles from '../../components/Titles';
import { ButtonLink } from '../../components/Buttom';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { CiFacebook, CiTwitter } from 'react-icons/ci';
import Footer from '../../components/Footer';

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
        <>
            <Banner />
            <Titles>Ofertas da semana</Titles>
            <Slider
                addClassName="mt-6 p-8"
                prevSlide={prevSlide}
                nextSlide={nextSlide}
            >
                <div
                    style={{
                        backgroundImage: `url(${slideOfers[current].url})`,
                    }}
                    className="w-full h-[20rem] p-1 bg-center bg-contain bg-no-repeat rounded-md transition duration-700"
                >
                    <div className="hidden md:w-3/12 md:flex justify-center items-center whitespace-normal text-sm text-slate-700 p-3 hover:text-black">
                        <span>{slideOfers[current].description}</span>
                    </div>
                </div>
            </Slider>
            <Categories />
            <div className="w-full md:h-20 p-6 flex justify-center items-center mt-3 text-white">
                <ButtonLink url="/products" pattern="primary">
                    Saiba mais
                </ButtonLink>
            </div>
            <section className="w-full">
                <Titles>Onde nos encontrar ?</Titles>
                <div className="w-full flex text-center md:justify-start items-center p-3">
                    <span className="text-base font-montserrat">
                        Fique por dentro de nossas redes sociais
                    </span>
                </div>
                <div className="w-full flex justify-center items-center p-3 space-x-8">
                    <Link to="/">
                        <CiFacebook size={40} className="text-theme-blue-50" />
                    </Link>
                    <Link to="/">
                        <BsInstagram size={30} className="text-theme-blue-50" />
                    </Link>
                    <Link to="/">
                        <CiTwitter size={40} className="text-theme-blue-50" />
                    </Link>
                </div>
            </section>
            <Footer addClassName="border-2 border-white border-t-theme-blue-50">
                &copy; 2023 | Todos os direitos são reservados - Raul Santos
            </Footer>
        </>
    );
}
