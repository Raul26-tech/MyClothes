import { IProductProps } from '../../pages/Products';

interface IProduct {
    products?: IProductProps;
}

export default function Cards({ products }: IProduct) {
    return (
        <div className="w-20 md:w-60 bg-red-300 gap-2 p-3 flex justify-center items-center rounded-md shadow-md drop-shadow-xl">
            <div className="">Teste</div>
        </div>
    );
}
