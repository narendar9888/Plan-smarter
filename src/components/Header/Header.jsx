import {Bell, Search } from "lucide-react";
import "./Header.css"
function Header() {
    return (
        <header className="header">
            <div className="username">
                <p>Welcome,</p>
                <h3>{}</h3>
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
