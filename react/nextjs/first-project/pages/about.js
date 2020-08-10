import Layout from '../components/Layout';

// inline-style
const myStyle = {
    color: "red",
    borderLeft: "5px solid black",
    padding: "5px"
}

const About = () => (
    <Layout mainTitle="About page with next.js" footer={`Copyright ${new Date().getFullYear()}`}>
        <h2>About page</h2>
        <p>Dolore elit voluptate cillum consectetur mollit veniam duis tempor ullamco. Mollit ullamco reprehenderit est qui do ad sit. Aliquip reprehenderit incididunt velit veniam labore magna do ut commodo voluptate. Voluptate ut non dolore dolore deserunt voluptate nulla ut. Eiusmod do quis aute elit ipsum mollit. Proident esse ad reprehenderit consectetur elit labore.</p>

        {/* scoped style */}
        <style jsx>{`
            p {
                color: indigo;
                font-size: 20px;
                font-style: oblique;
            }
        `}</style>
    </Layout>
);
        

export default About;