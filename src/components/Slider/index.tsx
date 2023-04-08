import { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
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
            <div className="p-6">{children}</div>

            <Button
                pattern="primary"
                onClick={prevSlide}
                {...rest}
                className="group-hover:block absolute  top-[40%] -translate-x-0 translate-y-[20%] left-0 text-2xl rounded-full text-theme-blue-50 cursor-pointer"
            >
                <HiChevronLeft size={40} />
            </Button>
            <Button
                pattern="primary"
                onClick={nextSlide}
                {...rest}
                className="group-hover:block absolute top-[40%] -translate-x-0 translate-y-[20%]  md:translate-y-[0%] right-0 text-2xl rounded-full text-theme-blue-50 cursor-pointer"
            >
                <HiChevronRight size={40} />
            </Button>
        </div>
    );
}
