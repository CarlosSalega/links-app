import { useFormStatus } from "react-dom";

export default function SubmitButton({ children }) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="flex justify-center items-center gap-4 bg-blue-500 disabled:bg-blue-200 disabled:text-gray-200 disabled:cursor-not-allowed text-white text-center py-2 px-4 w-full"
        >
            {children}
        </button>
    );
}
