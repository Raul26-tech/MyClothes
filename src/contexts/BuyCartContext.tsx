import { ReactNode, createContext, useState } from 'react';
import { api } from '../services/api';

export interface IProduct {
    id: string;
    name: string;
    price: number;
    picture?: string;
    category: string;
    avaliation?: string;
    description: string;
    observantion: string;
}

interface IBuyCartContext {
    valueTotal?: number;
    quantityProductAdded: number;
    addProdutCart: (product: IProduct) => void;
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
    const [totalValue, setTotalValue] = useState(0);
    const [productAdded, setProductAdded] = useState<IProduct>();

    const addProdutCart = async (product: IProduct) => {
        await api
            .post('/cart', product)
            .then(() => {
                setQuantity(quantity + 1);
                setProductAdded(product);
                setTotalValue(totalValue + product.price);

                console.log(productAdded);
            })
            .catch((e) => console.log(e));
    };

    const removeProductCart = () => {
        console.log('Teste2');
    };

    return (
        <BuyCartContext.Provider
            value={{
                valueTotal: 0,
                addProdutCart,
                removeProductCart,
                quantityProductAdded: quantity,
            }}
        >
            {children}
        </BuyCartContext.Provider>
    );
}
