import {Bell, Search, User } from "lucide-react";
import "./Header.css"
function Header() {
   const user = JSON.parse(localStorage.getItem("user"));
   const username = user?.name || "Neetu";

    return (
        <header className="header">
            <div className="username">
                <p>Welcome,</p>
                <h3>{username}</h3>
            </div>

            <div className="search-box">
               <Search size={18}></Search>
               <input type="text" placeholder="Search Here ...." />
            </div>

            <div>
                <Bell size={22}/>
            </div>
        </header>
    )
}

export default Header;
