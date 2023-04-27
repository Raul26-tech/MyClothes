interface IProductsData {
    products: {
        id: string;
        name: string;
        url: string;
        description: string;
        price: number;
        avaliation: string;
    };
}

interface ICardProductProps {
    addCartProducts: () => void;
    productData: IProductsData[];
}

export default function CardProduct({}: ICardProductProps) {
    return <div>CardProduct</div>;
}
