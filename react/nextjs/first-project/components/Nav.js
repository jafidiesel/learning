import Link from 'next/link';

const Nav = () => (
    <div className="Navbar">
        <img src="/bat-logo.png" alt="bat logo" height="45" />
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>

        <style jsx>{`
            a, img{
                padding: 10px;
            }
        `}
        </style>
    </div>
);

export default Nav;