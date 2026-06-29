import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Plus,
    Trash,
    X
} from "lucide-react";
import "./Calendar.css"

function Calendar() {
    const [view, setView] = useState("month");
    const [currentDate, setCurrentDate] = useState(new Date());

    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Team Meeting",
            date: "2026-07-02",
            priority: "normal"
        },
        {
            id: 2,
            title: "Project Deadline",
            date: "2026-07-05",
            priority: "high"
        },
        {
            id: 3,
            title: "DSA",
            date: "2026-07-03",
            priority: "normal"
        },
        {
            id: 4,
            title: "Web",
            date: "2026-07-04",
            priority: "low"
        },
        {
            id: 5,
            title: "Maths",
            date: "2026-07-05",
            priority: "low"
        }
    ]);

    const [showModal, setShowModal] = useState(false);

    const [newEvent, setNewEvent] = useState({
        title: "",
        date: "",
        priority: "",
    });

    const today = new Date();

    const title = 
        view === "day"
            ? currentDate.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
            })
            : view === "month"
            ? currentDate.toLocaleDateString("en-IN", {
                month: "long",
                year: "numeric",
            })
            : currentDate.getFullYear();

    const todayDate = today.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const handlePrevious = () => {
        if (view === "day") {
            setCurrentDate(
                new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    currentDate.getDate() - 1,
                )
            );
        } else if (view === "month") {
            setCurrentDate(
                new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() - 1,
                    1
                )
            );
        } else {
            setCurrentDate(
                new Date(
                    currentDate.getFullYear() - 1,
                    0,
                    1
                )
            );
        }
    };

    const handleNext = () => {
        if (view === "day") {
            setCurrentDate(
                new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    currentDate.getDate() + 1
                )
            );
        } else if (view === "month") {
            setCurrentDate(
                new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() + 1,
                    1
                )
            );
        } else {
            setCurrentDate(
                new Date(
                    currentDate.getFullYear() + 1,
                    0, 
                    1
                )
            );
        }
    };

    const addEvent = () => {
        if (!newEvent.title || !newEvent.date) return;

        setEvents([
            ...events,
            {
                id: Date.now(),
                title: newEvent.title,
                date: newEvent.date,
                priority: newEvent.priority,
            }
        ]);

        setNewEvent({
            title: "",
            date: "",
            priority: "",
        });

        setShowModal(false);
    };

    const deleteEvent = (id) => {
        setEvents(events.filter((event) => event.id !== id));
    };

    const updatePriority = (id, priority) => {
        setEvents(
            events.map((event) => 
                event.id === id
                ? {...event, priority }
                : event
            )
        );
    };


    const isToday = (day) => {
        if (!day) return false;

        return(
            day === today.getDate() &&
            currentDate.getFullYear() === today.getFullYear() &&
            currentDate.getMonth() === today.getMonth()
        );
    };

    const firstDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const days = [];

    for (let i = 0; i < firstDay; i++) {
        days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i)
    }

    return(
        <div className="cal-page">
            <div className="cal-header">
                <div>
                    <h2>CALENDER</h2>
                    <p className="current-date">{todayDate}</p>
                </div>

                <div className="cal-actions">
                    <button className="nav-btn"
                    onClick={handlePrevious}>
                        <ChevronLeft/>
                    </button>

                    <span className="month-title">{title}</span>

                    <button className="nav-btn"
                    onClick={handleNext}>
                        <ChevronRight/>
                    </button>

                    <button className="add-btn"
                    onClick={() => setShowModal(true)}>
                        <Plus/>
                        Add Event
                    </button>
                </div>
            </div>

            <div className="cal-views">
                <button
                    className={view === "day" ? "active" : ""}
                    onClick={() => setView("day")}
                >
                    Day
                </button>

                <button
                    className={view === "month" ? "active" : ""}
                    onClick={() => setView("month")}
                >
                    Month
                </button>

                <button
                    className={view === "year" ? "active" : ""}
                    onClick={() => setView("year")}
                >
                    Year
                </button>
            </div>

            <div className="cal-container">
                <div className="cal-main">

                    {view === "day" && (
                        <div className="day-view">
                            <h2>
                                {currentDate.toLocaleDateString("en-IN",{
                                    weekday: "long",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric"
                                })}
                            </h2>

                            {events.filter((event) => {
                                const eventDate = new Date(event.date);

                                return(
                                    eventDate.getDate() === currentDate.getDate() &&
                                    eventDate.getMonth() === currentDate.getMonth() &&
                                    eventDate.getFullYear() === currentDate.getFullYear()
                                );
                            }).length === 0 ? (
                                <div className="no-events">
                                    <h3>No Events</h3>
                                    <p>No events scheduled for this day.</p>
                                </div>
                            ) : (
                                events
                                .filter((event) => {
                                    const eventDate = new Date(event.date);

                                    return (
                                        eventDate.getDate() === currentDate.getDate() && 
                                        eventDate.getMonth() === currentDate.getMonth() &&
                                        eventDate.getFullYear() === currentDate.getFullYear()
                                    );
                                })
                                .map((event) => (
                                    <div
                                        key={event.id}
                                        className={`event-card ${event.priority}`}
                                    >
                                        <div className="event-card-header">
                                            <h4>{event.title}</h4>
                                        </div>

                                        <p>
                                            Date: {event.date}
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {view === "month" && (
                        <div className="cal-grid">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                                (day) => (
                                    <div key={day} className="day-name">
                                        {day}
                                    </div>
                                )
                            )}
                            {days.map((day, index) => (
                                <div
                                    key={index}
                                    className={`date-cell ${
                                        isToday(day) ? "today" : ""
                                    }`}
                                    onClick={() => {
                                        if (!day) return;
                                    
                                    setCurrentDate(
                                        new Date (
                                            currentDate.getFullYear(),
                                            currentDate.getMonth(),
                                            day
                                        )
                                    );

                                    setView("day");
                                    }}
                                >
                                    {day && (
                                        <>
                                            <div className="date-haeder">
                                                <span className="date-number">
                                                    {day}
                                                </span>

                                                {isToday(day) && (
                                                    <span className="today-badge">
                                                        Today
                                                    </span>
                                                )}
                                            </div>

                                            {events
                                                .filter((event) => {
                                                    const eventDate = new Date(
                                                        event.date
                                                    );

                                                    return (
                                                        eventDate.getDate() === day &&
                                                        eventDate.getMonth() === currentDate.getMonth() &&
                                                        eventDate.getFullYear() === currentDate.getFullYear()
                                                    );
                                                })
                                                .map((event) => (
                                                    <div
                                                        key={event.id}
                                                        className={`event ${event.priority}`}
                                                    >
                                                        <span>{event.title}</span>
                                                    </div>
                                                ))
                                            }
                                        </>
                                    )}

                                </div>
                            ))}
                        </div>
                    )}
                    {view === "year" && (
                        <div className="year-view">
                            {Array.from({ length: 12 }, (_, index) => (
                                <div
                                    key={index}
                                    className="month-card"
                                    onClick={() => {
                                        setCurrentDate(
                                            new Date(
                                                currentDate.getFullYear(),
                                                index,
                                                1
                                            )
                                        );
                                        setView("month");
                                    }}
                                >
                                    {new Date(
                                        currentDate.getFullYear(),
                                        index
                                    ).toLocaleDateString("default", {
                                        month: "long"
                                    })}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="cal-sidebar">
                    <h3>Upcoming Events</h3>

                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="task-card"
                        >
                            <strong>{event.title}</strong>

                            <span>{event.date}</span>

                            <p 
                                className={`priority-text ${event.priority}`}
                            >
                                <strong>{event.priority?.toUpperCase()}</strong>
                            </p>

                            <div className="task-btn">
                                <select
                                    className="priority-select"
                                    value={event.priority}
                                    onChange={(e) => 
                                        updatePriority(
                                            event.id,
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="high">
                                        High
                                    </option>

                                    <option value="normal">
                                        Normal
                                    </option>

                                    <option value="low">
                                        Low
                                    </option>
                                </select>

                                <button
                                    onClick={() => deleteEvent(event.id)}
                                >
                                    <Trash size={14}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showModal && (
                <div className="mod-overlay">
                    <div className="mod">
                        <div className="mod-header">
                            <h3>Add Event</h3>

                            <button
                                onClick={() => 
                                    setShowModal(false)
                                }
                            >
                                <X size={18}/>
                            </button>
                        </div>

                        <input 
                            type="text"
                            placeholder="Event Title"
                            value={newEvent.title}
                            onChange={(e) =>
                                setNewEvent({
                                    ...newEvent,
                                    title: e.target.value,
                                })
                            }
                         />

                         <input 
                            type="date"
                            value={newEvent.date}
                            onChange={(e) =>
                                setNewEvent({
                                    ...newEvent,
                                    date: e.target.value,
                                })
                            }
                         />

                         <select 
                            value={newEvent.priority}
                            onChange={(e) =>
                                setNewEvent({
                                    ...newEvent,
                                    priority: e.target.value,
                                })
                            }
                         >
                            <option value="high">
                                High
                            </option>
                            <option value="normal">
                                Normal
                            </option>
                            <option value="low">
                                Low
                            </option>
                         </select>

                         <button
                            className="save-btn"
                            onClick={addEvent}
                         >
                            Save Event
                         </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Calendar;