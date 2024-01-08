import LoginWithGoogle from "@/components/ui/LoginwithGoogle";

export default function LoginPage() {
    return (
        <div>
            <div className="bg-white border p-4 max-w-xs mx-auto">
                <h1 className="text-4xl font-bold text-center mb-6">Sign In</h1>
                <p className="text-center mb-6 text-slate-500">
                    Sign in to your account using one of the methods below
                </p>
                <LoginWithGoogle />
            </div>
        </div>
    );
}
