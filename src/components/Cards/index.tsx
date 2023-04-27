import { IProductProps } from '../../pages/Products';

interface IProduct {
    products?: IProductProps;
}

export default function Cards({ products }: IProduct) {
    return (
        <div className="w-[60rem] h-full flex flex-col flex-1 bg-red-300">
            <div className="">Teste</div>
        </div>
    );
}
