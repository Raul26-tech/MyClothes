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

interface IAddProductCart {
    product: IProduct | undefined;
}

interface IBuyCartContext {
    quantity?: number;
    addProdutCart: (product: IAddProductCart) => void;
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
    const [productAdded, setProductAdded] = useState<IAddProductCart>();

    const addProdutCart = async (product: IAddProductCart) => {
        await api
            .post('/cart', product)
            .then(() => {
                setQuantity(quantity + 1);
                setProductAdded(product);
                // console.log(productAdded);
            })
            .catch((e) => console.log(e));
    };

    const removeProductCart = () => {
        console.log('Teste2');
    };

    return (
        <BuyCartContext.Provider
            value={{
                quantity,
                addProdutCart,
                removeProductCart,
            }}
        >
            {children}
        </BuyCartContext.Provider>
    );
}
