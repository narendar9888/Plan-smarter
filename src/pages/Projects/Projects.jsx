import "./Projects.css";
import { useState } from "react";
import { 
    Search,
    Filter,
    Plus,
    Calendar,
    User,
    X,
 } from "lucide-react";

function Projects() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    const [showModal, setShowModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Task Dashboard UI",
      description: "Build modern dashboard with React and CSS",
      progress: 75,
      status: "in-progress",
      team: "Frontend Team",
      deadline: "2026-06-20",
    },
    {
      id: 2,
      title: "AI Chat Assistant",
      description: "Smart chatbot with AI integration",
      progress: 40,
      status: "in-progress",
      team: "AI Team",
      deadline: "2026-07-05",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "Personal portfolio with animations",
        progress: 100,
        status: "completed",
        team: "Design Team",
        deadline: "2026-07-30",
    },
  ]);
  
  const [form, setForm] = useState({
    title: "",
    description: "",
    progress: 0,
    status: "in-progress",
    deadline: "",
  });
  const [editingId, setEditingId] = useState(null);


  const [errors, setErrors] = useState({});

  const openAddModal = () => {
    setIsEdit(false);
    setForm({
      title: "",
      description: "",
      progress: 0,
      status: "in-progress",
      team: "",
      deadline: "",
    });
    setShowModal(true);
  };
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

                <button 
                    className="add-btn"
                    onClick={() => setShowModal(true)}
                    >
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



