import { ReactNode, createContext, useCallback, useMemo } from 'react';
import { api } from '../services/api';

interface IUser {
    name: string;
    email?: string;
}

interface IMainContext {
    user?: IUser;
    signIn?: (email: string, password: string) => Promise<void>;
    signOut?: () => Promise<void>;
}

export const MainContext = createContext<IMainContext>({} as IMainContext);

interface IMainProviderProps {
    children: ReactNode;
}

export function MainProvider({ children }: IMainProviderProps) {
    return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
}
