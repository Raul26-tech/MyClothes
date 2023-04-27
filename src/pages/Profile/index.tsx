import Content from '../../components/Content';
import Layout from '../../components/Layout';
import Titles from '../../components/Titles';

export default function Profile() {
    return (
        <Layout>
            <Content>
                <Titles addClassNameContainer="p-0 bg-red-300">
                    Meu perfil
                </Titles>
            </Content>
        </Layout>
    );
}
