import Header from "../components/home/Header";
import Feed from "../components/feed/feed";
import Sidebar from "../components/sidebar/sidebar";

function Home() {
    // Assume header height is 4rem (h-16)
    return (
        <div className="bg-slate-100 min-h-screen">
            <div className="sticky top-0 z-50">
                <Header />
            </div>
            <div className="flex">
                <aside className="w-1/2 min-w-[220px] h-[calc(100vh-4rem)] overflow-y-auto home-aside">
                    <Sidebar />
                </aside>
                <main className="flex-1 h-[calc(100vh-4rem)] overflow-y-auto home-main">
                    <Feed />
                </main>
            </div>
        </div>
    );
}

export default Home;