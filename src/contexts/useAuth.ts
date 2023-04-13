import { useContext } from 'react';
import { MainContext } from './MainContext';

export function useAuth() {
    return useContext(MainContext);
}
