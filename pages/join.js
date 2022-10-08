import Link from "next/link";
import Join from "../src/components/Join";

export default function Home() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center h-16">
                <h1 className="font-medium text-2xl">Tepa Task</h1>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>

            <Join />
        </div>
    );
}
