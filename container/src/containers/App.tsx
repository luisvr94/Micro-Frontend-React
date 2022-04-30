import { ThemeProvider } from 'styled-components'

import Layout from '../components/Layout';
import Header from '../components/Header';
import Home from './Home';

const App = () => {
    return (
        <ThemeProvider
            theme={{
                space: [0, 6, 12, 18, 24],
                breakpoints: ['32em', '48em', '64em']
            }}>
            <Layout>
                <Header siteTitle={`Peliculas!`} />
                <Home />
            </Layout>
        </ThemeProvider>
    );
};

export default App;
