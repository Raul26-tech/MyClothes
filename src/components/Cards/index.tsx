import Button from '../Buttom';
import { BsCart2 } from 'react-icons/bs';

export interface IProductProps {
    key?: string;
    name?: string;
    price?: number;
    picture?: string;
    avaliation?: string;
    description?: string;
    onClickLine?: () => void;
}

export default function Card({
    name,
    picture,
    price,
    onClickLine,
}: IProductProps) {
    return (
        <div className="w-full min-w-[15rem] md:w-[10rem] p-6 flex flex-col  items-center transition duration-300 hover:translate-y-2 bg-white rounded-sm shadow-2xl drop-shadow-md">
            <div className="w-full flex justify-center items-center p-3 h-3/4 border-[1px]  border-b-slate-500">
                <img src={picture} alt="Imagem do produto" className="p-3" />
            </div>
            <div className="w-full p-3 flex flex-col justify-center items-center text-center">
                <span className="text-slate-900 text-lg">
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(Number(price))}
                </span>
                <span className="text-slate-600 text-lg">{name}</span>
            </div>
            <div className="w-full flex justify-center items-center">
                <Button
                    pattern="secondary"
                    addClassName="text-white text-sm gap-x-2 w-full"
                    // onClick={() => {
                    //     onClickLine;
                    // }}
                >
                    Comprar
                    <BsCart2 size={20} />
                </Button>
            </div>
        </div>
    );
}
