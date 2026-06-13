import { useState } from "react";
import { 
    ChevronLeft,
    ChevronRight,
    Plus,
    X,
    Trash2
}
    
    from "lucide-react";

import "./Calendar.css"

function Calendar() {
    const [view, setView] = useState("month");
    const [current, setCurrentDate] = useState(new Date());

    

    const today = new Date();

    const todayDate = today.toLocaleDateString("en-IN",{
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    return (
        
        <div className="cal-page">
            <div className="cal-header">
                <div>
                    <h2>CLENDER</h2>
                    <p className="current-date">{todayDate}</p>
                </div>

                <div className="cal-actions">
                    <button className="nav-btn">
                        <ChevronLeft size={24}/>
                    </button>

                    <span></span>

                    <button className="nav-btn">
                        <ChevronRight size={24}/>
                    </button>

                    <button className="add-btn">
                        <Plus size={18}/>
                        Add Event
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Calendar;
