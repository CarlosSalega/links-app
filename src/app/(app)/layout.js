import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "LinksApp",
    description: "Generated by create next app",
};

export default function AppLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main>
                    <aside>Aside stuff</aside>
                    <div className="max-w-4xl mx-auto p-6">{children}</div>
                </main>
            </body>
        </html>
    );
}