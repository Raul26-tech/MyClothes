import { ButtonHTMLAttributes, ReactNode, useRef } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import Button from '../Buttom';

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
    return (
        <div className={`w-full rounded-md shadow-md p-6  ${addClassName}`}>
            <div className="w-full flex justify-between">
                <Button
                    onClick={forNext}
                    pattern="primary"
                    addClassName="md:w-[5rem]"
                >
                    <HiArrowLeft className="text-white" />
                </Button>
                <div className="w-[30rem] flex justify-center items-center overflow-x-auto">
                    {children}
                </div>
                <Button
                    onClick={forNext}
                    pattern="primary"
                    addClassName="md:w-[5rem]"
                >
                    <HiArrowRight className="text-white" />
                </Button>
            </div>
        </div>
    );
}
