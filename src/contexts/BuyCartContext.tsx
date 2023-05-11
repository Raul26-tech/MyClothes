import { ReactNode, createContext, useState } from 'react';

interface IBuyCartContext {
    quantityProduct: number;
    addProdutCart: () => void;
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

    const addProdutCart = () => {
        setQuantity(quantity + 1);
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
