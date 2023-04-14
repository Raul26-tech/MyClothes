import { useContext } from 'react';
import { MainContext } from '../contexts/MainContext';

export function useAuth() {
    return useContext(MainContext);
}
