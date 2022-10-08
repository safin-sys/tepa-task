import Link from "next/link";
import Join from "../src/components/Join";
import Nav from "../src/components/Nav";

export default function Home() {
    return (
        <div className="container mx-auto px-4">
            <Nav />
            <Join />
        </div>
    );
}
