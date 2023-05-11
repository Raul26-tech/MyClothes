import { ReactNode, createContext } from 'react';

interface IBuyCartContext {
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
    const addProdutCart = () => {
        console.log('Teste');
    };

    const removeProductCart = () => {
        console.log('Teste2');
    };

    return (
        <BuyCartContext.Provider value={{ addProdutCart, removeProductCart }}>
            {children}
        </BuyCartContext.Provider>
    );
}
