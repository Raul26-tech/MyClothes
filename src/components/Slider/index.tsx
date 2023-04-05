import { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import Button from '../Buttom';

interface ISliderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    prevSlide?: () => void;
    nextSlide?: () => void;
    addClassName?: string;
}

export default function Slider({
    children,
    addClassName = '',
    prevSlide,
    nextSlide,
    ...rest
}: ISliderProps) {
    return (
        <div
            className={`w-full md:max-w-[1400px] lg:m-w-[1600px] h-auto m-auto p-6 relative rounded-md shadow-xl bg-white group ${addClassName}`}
        >
            {children}
            <Button
                pattern="primary"
                onClick={prevSlide}
                className="hidden group-hover:block absolute p-3 top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full bg-theme-blue-50 text-white cursor-pointer"
            >
                <HiArrowLeft size={30} />
            </Button>
            <Button
                pattern="primary"
                onClick={nextSlide}
                className="hidden group-hover:block absolute p-3 top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full bg-theme-blue-50 text-white cursor-pointer"
            >
                <HiArrowRight size={30} />
            </Button>
        </div>
    );
}
