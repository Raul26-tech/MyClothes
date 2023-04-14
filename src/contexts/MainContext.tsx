import { ReactNode, createContext, useCallback, useMemo } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

interface IUser {
    name: string;
    email?: string;
}

interface IMainContext {
    user?: IUser;
    signIn: (email: string, password: string) => Promise<void>;
    signOut?: () => Promise<void>;
}

export const MainContext = createContext<IMainContext>({} as IMainContext);

interface IMainProviderProps {
    children: ReactNode;
}

export function MainProvider({ children }: IMainProviderProps) {
    const navigate = useNavigate();

    const signIn = useCallback(async (email: string, password: string) => {
        try {
            const response = await api.post<IUser>('login', {
                email,
                password,
            });
            console.log(response.data);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }, []);

    const values = useMemo(
        () => ({
            signIn,
        }),
        []
    );

    return (
        <MainContext.Provider value={values}>{children}</MainContext.Provider>
    );
}
