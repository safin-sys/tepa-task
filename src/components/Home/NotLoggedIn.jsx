import Link from "next/link";

const NotLoggedIn = () => {
    return (
        <main className="grid place-content-center">
            <h1>You are not logged in</h1>
            <div className="flex justify-center gap-2 mt-2">
                <Link href="/login">
                    <a className="bg-indigo-500 px-2 rounded text-white">
                        Login
                    </a>
                </Link>
                <p>or</p>
                <Link href="/join">
                    <a className="bg-indigo-500 px-2 rounded text-white">
                        Join
                    </a>
                </Link>
            </div>
        </main>
    );
};

export default NotLoggedIn;
