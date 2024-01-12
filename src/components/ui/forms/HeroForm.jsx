"use client";

import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HeroForm({ user }) {
    const router = useRouter();

    useEffect(() => {
        if (
            "localStorage" in window &&
            window.localStorage.getItem("desiredUsername")
        ) {
            const username = window.localStorage.getItem("desiredUsername");
            window.localStorage.removeItem("desiredUsername");
            redirect("/account?desiredUsername=" + username);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const input = form.querySelector("input");
        const username = input.value;
        if (username.length > 0) {
            if (user) {
                router.push("account?desiredUsername=" + username);
            } else {
                window.localStorage.setItem("desiredUsername", username);
                await signIn("google");
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="inline-flex items-center shadow-lg shadow-gray-700/20"
        >
            <span className="bg-white pl-4 py-4">linksapp.com/</span>
            <input
                type="text"
                placeholder="username"
                className="py-4 focus:outline-blue-500"
            />
            <button type="submit" className="bg-blue-500 text-white py-4 px-6">
                Join for Free
            </button>
        </form>
    );
}
