import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./MainLayout.css"

function MainLayout() {
    return (
        <div className="layout">
            <Sidebar/>
            <main className="main-area">
                <Header/>
                <Outlet/>
            </main>
        </div>
    )
}


export default MainLayout