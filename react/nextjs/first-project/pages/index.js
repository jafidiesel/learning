import Head from 'next/head';
import Layout from '../components/Layout';

const Index = () => (
    <Layout mainTitle="Home page with next.js" footer={`Copyright ${new Date().getFullYear()}`}>
        <Head>
            <title>Home Page</title>
        </Head>
        <h2>Running next</h2>
        <p>Cillum culpa ex ipsum culpa. Sunt fugiat Lorem duis commodo cillum eiusmod. Culpa dolore id nulla cillum commodo sint nisi irure ullamco quis commodo labore tempor. Ullamco non ex ad pariatur est.</p>
    </Layout>
    
);

export default Index;