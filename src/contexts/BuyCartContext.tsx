import { ReactNode, createContext, useState } from 'react';
import { IProductProps } from '../components/Cards';
import { SubmitHandler } from 'react-hook-form';
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
    const [prod, setProd] = useState<IProduct | undefined>();

    const addProdutCart = (product: typeof prod) => {
        api.post('/cart', product)
            .then((res) => {
                setQuantity(quantity + 1);
                setProd(prod);
                console.log(JSON.stringify(res.data, null, 2));
                localStorage.setItem('@Quantity', quantity.toLocaleString());
            })
            .catch((e) => console.log(e));
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
