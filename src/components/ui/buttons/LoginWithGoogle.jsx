"use client";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function LoginWithGoogle() {
    return (
        <button
            onClick={() => {
                signIn("google");
            }}
            type="button"
            className="flex justify-center items-center gap-2 bg-blue-500 text-white text-center w-full py-4"
        >
            <FaGoogle />
            <span>Sign In with Google</span>
        </button>
    );
}
