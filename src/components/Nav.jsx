import Link from "next/link";
import { useState } from "react";
import { logout } from "../utils/auth";

const Nav = ({ user }) => {
    return (
        <div className="flex justify-between items-center h-16">
            <Link href="/">
                <a className="font-medium text-2xl">Tepa Task</a>
            </Link>
            {user && <UserMenu user={user} />}
        </div>
    );
};

export default Nav;

const UserMenu = ({ user }) => {
    const [active, setActive] = useState(true);

    const handleLogout = () => {
        logout().then(() => setActive(true));
    };
    return (
        <div className="relative">
            <button
                onClick={() => setActive((prev) => !prev)}
                className="z-10 text-sm text-gray-600 px-2 py-1 border focus:border bg-white"
            >
                {user.displayName}
            </button>

            <div
                className={`${
                    active
                        ? "-translate-y-52 invisible"
                        : "translate-y-0 visible"
                } transition-all absolute top-[120%] border bg-slate-200 w-full flex flex-col items-center gap-2 z-0`}
            >
                <button
                    onClick={handleLogout}
                    className="hover:bg-slate-400 w-full h-full px-2 py-1"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};
