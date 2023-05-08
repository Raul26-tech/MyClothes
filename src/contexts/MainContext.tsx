import {
    ReactNode,
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

export interface IUser {
    name: string;
    email: string;
}

interface IMainContext {
    user?: IUser;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

export const MainContext = createContext<IMainContext>({} as IMainContext);

interface IMainProviderProps {
    children: ReactNode;
}

export function MainProvider({ children }: IMainProviderProps) {
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        const userToken = localStorage.getItem('@Auth:token');
        console.log(userToken);
    }, []);

    const signIn = useCallback(async (email: string, password: string) => {
        try {
            const response = await api.post<IUser>('login', {
                email,
                password,
            });

            const token = localStorage.setItem(
                '@Auth:token',
                response.data.email
            );
            console.log(JSON.stringify(token, null, 2));

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }, []);

    const signOut = useCallback(async () => {
        localStorage.removeItem('@Auth:token');
        window.location.pathname = '/login';
    }, []);

    const values = useMemo(
        () => ({
            signIn,
            signOut,
        }),
        []
    );

    return (
        <MainContext.Provider value={values}>{children}</MainContext.Provider>
    );
}
