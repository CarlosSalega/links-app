"use client";

import { signOut } from "next-auth/react";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function LogoutButton() {
    return (
        <button
            className="flex gap-2 items-center border p-2 px-4 shadow-md"
            onClick={() => signOut()}
        >
            <span>Logout</span>
            <FaArrowRightFromBracket />
        </button>
    );
}
