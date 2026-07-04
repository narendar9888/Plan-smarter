import { useState } from "react";
import { 
    Search,
    Filter,
    Plus,
    X,
 } from "lucide-react";

function Projects() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const isEdit = false; // delete

    const [showModal, setShowModal] = useState(true); // chnage it after complete true to false
    return(
        <div className="projects-container">
            <div className="projects-header">
                <h1>Projects</h1>
                <p>Manage your projects efficiently</p>
            </div>

            <div className="projects-controls">
                <div className="search-box">
                    <Search size={18} />
                    <input 
                        placeholder="Search Projects..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="filter-box">
                    <Filter size={18}/>
                    <select onChange={(e) => setFilter(e.target.value)}>
                        <option value="all"> All</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>

                <button className="add-btn">
                    <Plus size={18}/>
                    New Project
                </button>
            </div>





        {showModal && (
            <div className="mod-overlay">
                <div className="mod">
                    <div className="mod-header">
                        <h2>{isEdit ? "Edit Project" : "Add New Project"}</h2>
                        <X onClick={() => setShowModal(false)}/>
                    </div>

                    <form className="mod-form">
                        <div className="form-group">
                            <label>Title</label>
                            <input 
                            />
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <textarea/>
                        </div>

                        <div className="form-group">
                            <label>Team</label>
                            <input  />
                        </div>

                        <div className="form-group">
                            <label>Deadline</label>
                            <input type="date" />
                        </div>

                        <button className="submit-btn">
                            {isEdit ? "Upadate Project" : "Create Project"}
                        </button>
                    </form>
                </div>
            </div>
        )}    
        </div>
    )
}
 
export default Projects;

