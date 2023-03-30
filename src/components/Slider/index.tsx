import { ReactNode } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import Button from '../Buttom';

interface ISliderProps {
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
}: ISliderProps) {
    return (
        <div className={`w-full rounded-md shadow-md p-6 ${addClassName}`}>
            <div className="w-full flex justify-between">
                <Button
                    onClick={toGoBack}
                    pattern="primary"
                    addClassName="md:w-[5rem]"
                >
                    <HiArrowLeft className="text-white" />
                </Button>
                <div className="w-full flex justify-center items-center overflow-auto">
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
