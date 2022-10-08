import Link from "next/link";
import Login from "../src/components/Login";
import Nav from "../src/components/Nav";

export default function LoginPage() {
    return (
        <div className="container mx-auto px-4">
            <Nav />
            <Login />
        </div>
    );
}
