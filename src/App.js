import BarraTopo from "./Barratopo";
import Feed from './Feed'
import BottomBar from "./Bottombar" 
import SideBar from "./Sidebar";

export default function App() {
    return (
        <>
        <div>
            <BarraTopo />
            <div class="conteudo">
                <Feed />
            </div>
            <BottomBar />
        </div>
        <SideBar />
        </>
    )
}

