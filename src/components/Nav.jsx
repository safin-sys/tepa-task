import Link from "next/link";

const Nav = () => {
    return (
        <div className="flex justify-between items-center h-16">
            <h1 className="font-medium text-2xl">Tepa Task</h1>
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
    );
};
export default Nav;
