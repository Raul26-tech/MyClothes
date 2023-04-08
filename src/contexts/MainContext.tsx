import { ReactNode, createContext } from 'react';
import Layout from '../components/Layout';
import Content from '../components/Content';

interface IUser {
    name: string;
    email?: string;
}

interface IMainContext {
    user?: IUser;
    signIn?: (email: string, password: string) => void;
    signOut?: () => void;
}

export const MainContext = createContext({} as IMainContext);

interface IMainProviderProps {
    children: ReactNode;
}

export function MainProvider({ children }: IMainProviderProps) {
    return (
        <MainContext.Provider value={{}}>
            <Layout>
                <Content>{children}</Content>
            </Layout>
        </MainContext.Provider>
    );
}
