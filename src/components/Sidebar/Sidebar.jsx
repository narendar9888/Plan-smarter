import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { 
    GlobeOffIcon,
    CheckCircle2,
    LayoutDashboard,
    CalendarDays,
    Folder,
    FileBarChart,
    Users,
    Settings,
    Briefcase,
    UserCircle,
    LogOut

 } from "lucide-react";

function Sidebar(){
    return (
        <aside className="sidebar">
            <div>
                <h2>
                    <GlobeOffIcon size={24}></GlobeOffIcon>
                    Your World
                </h2>
                <p className="sidebar-title">Menu</p>

                <NavLink to="/" className="sidebar-link">
                    <CheckCircle2 size={18}></CheckCircle2>
                    My Task
                </NavLink>

                <NavLink to="/dashboard" className="sidebar-link">
                    <LayoutDashboard size={18}></LayoutDashboard>
                    Dashboard
                </NavLink>

                <NavLink to="/schedule" className="sidebar-link">
                    <CalendarDays size={18}></CalendarDays>
                    Schedule
                </NavLink>

                <NavLink to="/records" className="sidebar-link">
                    <FileBarChart size={18}></FileBarChart>
                    Records
                </NavLink>

                <hr></hr>

                <NavLink to="/projects" className="sidebar-link">
                    <Folder size={18}></Folder>
                    Projects
                </NavLink>

                <NavLink to="/users" className="sidebar-link">
                    <Users size={18}></Users>
                    Team
                </NavLink>

                <NavLink to="/team" className="sidebar-link">
                    <Briefcase size={18}></Briefcase>
                    Clients
                </NavLink>
            </div>

            <div className="presnal">

                <NavLink to="/setting" className="sidebar-link">
                    <Settings size={18}></Settings>
                    Setting
                </NavLink>

                <NavLink to="/profile" className="sidebar-link">
                    <UserCircle size={18}></UserCircle>
                    Profile
                </NavLink>

                <NavLink to="/logout" className="sidebar-link">
                    <LogOut size={18}></LogOut>
                    Logout
                </NavLink>

            </div>
        </aside>
    )
}

export default Sidebar;