import { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import image1 from '../../assets/placa.jpg';
import image2 from '../../assets/processador.jpg';
import image3 from '../../assets/rgb_hyperx.jpg';

const slide = [
    { url: `${image1}` },
    { url: `${image2}` },
    { url: `${image3}` },
];

interface ISliderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    forNext?: () => void;
    toGoBack?: () => void;
    addClassName?: string;
}

export default function Slider({
    children,
    forNext,
    toGoBack,
    addClassName = '',
    ...rest
}: ISliderProps) {
    const [current, setCurrent] = useState(0);

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
        <div
            className={`w-full md:max-w-[1400px] lg:m-w-[1600px] h-auto m-auto p-6 relative rounded-md shadow-xl bg-white group ${addClassName}`}
        >
            <div
                style={{ backgroundImage: `url(${slide[current].url})` }}
                className="w-full h-[30rem] p-6 rounded-2xl bg-center bg-contain bg-no-repeat shadow-lg duration-500"
            >
                {children}
            </div>

            <div className="hidden group-hover:block absolute p-3 top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full bg-theme-blue-50 text-white cursor-pointer">
                <HiArrowLeft size={30} onClick={prevSlide} />
            </div>
            <div className="hidden group-hover:block absolute p-3 top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full bg-theme-blue-50 text-white cursor-pointer">
                <HiArrowRight size={30} onClick={nextSlide} />
            </div>
        </div>
    );
}
