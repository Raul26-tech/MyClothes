import { useContext } from 'react';
import { BuyCartContext } from '../contexts/BuyCartContext';

export function useBuyCart() {
    return useContext(BuyCartContext);
}
