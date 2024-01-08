export default function Home() {
    return (
        <main>
            <section className="pt-32">
                <div className="max-w-md mb-6">
                    <h1 className="text-6xl font-bold">
                        Your one link <br /> for everything
                    </h1>
                    <h2 className="text-slate-500 text-xl mt-6">
                        Share your links, social profiles, contact info and more
                        on one page
                    </h2>
                </div>
                <form className="inline-flex items-center shadow-lg shadow-gray-700/20">
                    <span className="bg-white pl-4 py-4">linksapp.com/</span>
                    <input
                        type="text"
                        placeholder="username"
                        className="py-4"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-4 px-6"
                    >
                        Join for Free
                    </button>
                </form>
            </section>
        </main>
    );
}
