import { updateProfile } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { join } from "../utils/auth";
import { auth } from "../utils/firebase";

const Login = () => {
    const [submitted, setSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const router = useRouter();
    const onSubmit = async (data) => {
        setSubmitted(true);
        await join(data.email, data.password).then(() => {
            updateProfile(auth.currentUser, {
                displayName: data.name,
            });
        });
        router.push("/");
    };
    return (
        <main className="flex flex-col max-w-xs mx-auto justify-center h-[calc(100vh-(64px*2))]">
            <h1 className="font-medium mb-4 text-center">Join</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        className={`px-2 py-[2px] border ${
                            !errors.name
                                ? "border-gray-300"
                                : "focus:border-rose-500 border-rose-500"
                        } w-full rounded-md`}
                        placeholder="টেপা ইমন"
                        {...register("name", {
                            required: "Name is required",
                        })}
                    />
                    {errors.name && (
                        <p className="text-sm text-rose-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <div className="flex flex-col gap-1 mt-2">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        className={`px-2 py-[2px] border ${
                            !errors.email
                                ? "border-gray-300"
                                : "focus:border-rose-500 border-rose-500"
                        } w-full rounded-md`}
                        placeholder="emon@example.com"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="text-sm text-rose-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className="flex flex-col gap-1 mt-2">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        className={`px-2 py-[2px] border ${
                            !errors.password
                                ? "border-gray-300"
                                : "focus:border-rose-500 border-rose-500"
                        } w-full rounded-md`}
                        placeholder="******"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message:
                                    "Password must be at least 6 characters long",
                            },
                        })}
                    />
                    {errors.password && (
                        <p className="text-sm text-rose-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <div className="flex flex-col gap-1 mt-2">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input
                        id="confirm_password"
                        type="password"
                        className={`px-2 py-[2px] border ${
                            !errors.confirm_password
                                ? "border-gray-300"
                                : "focus:border-rose-500 border-rose-500"
                        } w-full rounded-md`}
                        placeholder="******"
                        {...register("confirm_password", {
                            required: "Confirm password is required",
                            validate: (val) => {
                                return val === watch("password")
                                    ? true
                                    : "Passwords must match";
                            },
                        })}
                    />
                    {errors.confirm_password && (
                        <p className="text-sm text-rose-500">
                            {errors.confirm_password.message}
                        </p>
                    )}
                </div>
                <button
                    disabled={submitted}
                    className="disabled:bg-indigo-300 flex items-center justify-center w-full bg-indigo-500 text-white rounded-md mt-2 py-[2px]"
                >
                    {submitted ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5em"
                            height="1.5em"
                            viewBox="0 0 44 44"
                            stroke="#fff"
                        >
                            <g fill="none" fillRule="evenodd" strokeWidth="2">
                                <circle cx="22" cy="22" r="1">
                                    <animate
                                        attributeName="r"
                                        begin="0s"
                                        dur="1.8s"
                                        values="1; 20"
                                        calcMode="spline"
                                        keyTimes="0; 1"
                                        keySplines="0.165, 0.84, 0.44, 1"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="stroke-opacity"
                                        begin="0s"
                                        dur="1.8s"
                                        values="1; 0"
                                        calcMode="spline"
                                        keyTimes="0; 1"
                                        keySplines="0.3, 0.61, 0.355, 1"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                                <circle cx="22" cy="22" r="1">
                                    <animate
                                        attributeName="r"
                                        begin="-0.9s"
                                        dur="1.8s"
                                        values="1; 20"
                                        calcMode="spline"
                                        keyTimes="0; 1"
                                        keySplines="0.165, 0.84, 0.44, 1"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="stroke-opacity"
                                        begin="-0.9s"
                                        dur="1.8s"
                                        values="1; 0"
                                        calcMode="spline"
                                        keyTimes="0; 1"
                                        keySplines="0.3, 0.61, 0.355, 1"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            </g>
                        </svg>
                    ) : (
                        "Join"
                    )}
                </button>
            </form>
            <p className="mt-2 text-slate-500 text-sm">
                Already have an account?{" "}
                <Link href="/login">
                    <a className="text-indigo-500">Login</a>
                </Link>
            </p>
        </main>
    );
};

export default Login;
