import Header from "../components/home/Header";
import Feed from "../components/feed/feed";
import Sidebar from "../components/sidebar/sidebar";

function Home() {
    return (
        <div className="">
            <Header />
            <div className="flex ">
                <Sidebar className="w-2/4"/>
                <Feed />
            </div>
        </div>
    );
}

export default Home