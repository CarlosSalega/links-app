import UsernameForm from "@/components/ui/forms/UsernameForm";
import { Page } from "@/models/page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function AccountPage({ searchParams }) {
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams?.desiredUsername;

    if (!session) {
        return redirect("/");
    }

    mongoose.connect(process.env.MONGODB_URI);
    const page = await Page.findOne({ owner: session?.user?.email });

    if (page) {
        return <div>your page is/{page.uri}</div>;
    }

    return (
        <div>
            <UsernameForm desiredUsername={desiredUsername} />
        </div>
    );
}
