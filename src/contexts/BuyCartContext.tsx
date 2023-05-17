import { ReactNode, createContext, useState } from 'react';
import { IProductProps } from '../components/Cards';
interface IProduct {
    name?: string;
    price?: number;
    picture?: string;
    category?: string;
    avaliation?: string;
    description?: string;
}

interface IBuyCartContext {
    quantityProduct: number;
    addProdutCart: (product: IProduct | undefined) => void;
    removeProductCart: () => void;
}

export const BuyCartContext = createContext<IBuyCartContext>(
    {} as IBuyCartContext
);

interface IBuyCartProvider {
    children: ReactNode;
}

export function BuyCartProvider({ children }: IBuyCartProvider) {
    const [quantity, setQuantity] = useState<number>(0);
    const [prod, setProd] = useState<IProduct>();

    const addProdutCart = () => {
        setQuantity(quantity + 1);
        setProd(prod);
        console.log(prod);
        localStorage.setItem('@Quantity', quantity.toLocaleString());
    };

    const removeProductCart = () => {
        console.log('Teste2');
    };

    return (
        <BuyCartContext.Provider
            value={{
                addProdutCart,
                removeProductCart,
                quantityProduct: quantity,
            }}
        >
            {children}
        </BuyCartContext.Provider>
    );
}
