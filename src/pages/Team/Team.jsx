import React, {useState, useEffect} from "react";
import "./Team.css";
import TeamCard from "../../components/Team/TeamCard";
import teamData from "../../data/teamData";


const Team = () => {
  const [members, setMembers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    email: "",
    avatar: "",
  });

  const [selectedMember, setSelectedMember] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  
  const handleViewProfile = (member) => {
    setSelectedMember(member);
    setShowProfile(true);
  };

  useEffect(() => {
    const savedMembers = localStorage.getItem("teamMembers");

    if (savedMembers) {
      setMembers(JSON.parse(savedMembers));
    } else {
      setMembers(teamData);
      localStorage.setItem("teamMembers", JSON.stringify(teamData));
    }
    }, []);

    const handleChange = (e) => {
      setNewMember({
        ...newMember,
        [e.target.name] : e.target.value,
      });
    };

    const handleAddMember = () => {
      if (
        !newMember.name ||
        !newMember.role ||
        !newMember.email
      ) {
        alert("Please fill all fields");
        return;
      }
      const member = {
        id: Date.now(),
        ...newMember,
        avatar: newMember.avatar || "https://via.placeholder.com/150",
        Tasks: 0,
        Completed: 0
      };
    
      const updatedMembers = [...members, member];
    
      setMembers(updatedMembers);
      localStorage.setItem(
        "teamMembers",
        JSON.stringify(updatedMembers)
      );
      
      setNewMember({
        name: "",
        role: "",
        email: "",
        avatar: "",
      });

      setShowModal(updatedMembers);
    }



  const handleRemoveMember = (id) => {
    const updatedMembers = members.filter(
      (member) => member.id !== id
    );

    setMembers(updatedMembers);

    localStorage.setItem(
      "teamMembers",
      JSON.stringify(updatedMembers)
    );
  };


  return (
    <div className="team-page">
      <div className="team-header">
        <h1>Team Member</h1>
        <button
          onClick={() => setShowModal(true)}
          className="add-btn"
        >
          Add Member
        </button>
      </div>

      {/* Team Card */}
      <div className="team-grid">
        {members.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
            onViewProfile={handleViewProfile}
            onRemoveMember={handleRemoveMember}
          />
        ))}
      </div>

      {showModal && (
        <div className="mod-overlay">
          <div className="mem-mod">
            <h2>Add Team Member</h2>

            <input 
            type="text"
            name="name"
            placeholder="Name"
            value={newMember.name}
            onChange={handleChange}
             />

            <input 
            type="text"
            name="role"
            placeholder="Role"
            value={newMember.role}
            onChange={handleChange}
             />

            <input 
            type="text"
            name="email"
            placeholder="Email"
            value={newMember.email}
            onChange={handleChange}
            />

            <input 
            type="text"
            name="avatar"
            placeholder="Image URL"
            value={newMember.avatar}
            onChange={handleChange}
            />

            <div className="modal-btn">
              <button 
              className="save-btn"
              onClick={handleAddMember}>
                Save
              </button>

              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showProfile && selectedMember && (
        <div className="mod-overlay">
          <div className="profile-mod">
            <img 
              src={selectedMember.avatar} 
              alt={selectedMember.name}
              className="profile-avatar"
               />

              <h2>{selectedMember.name}</h2>
              <p>{selectedMember.role}</p>

              <div className="profile-details">
                <p>
                  <strong>Email:</strong> {selectedMember.email}
                </p>

                <p>
                  <strong>Total Tasks:</strong> {selectedMember.Tasks}
                </p>

                <p>
                  <strong>Completed:</strong> {selectedMember.Completed}
                </p>
              </div>

              <button
                className="close-btn"
                onClick={() => setShowProfile(false)}
              >
                Close
              </button>
          </div>
        </div>
      )}


    </div>
  );
};


export default Team;
