import "./TeamCard.css";

function TeamCard({
    member,
    onViewProfile,
    onRemoveMember
}) {
    return (
        <div className="team-card">
            <img 
                src={member.avatar} 
                alt={member.name} 
                className="team-avatar"
                onError={(e) => {
                    e.target.src = "https://i.pravatar.cc/300?img=51";
                }}
            />

            <h3>{member.name}</h3>
            <p>{member.role}</p>

            <div className="team-info">
                <span>Tasks {member.tasks}</span>
                <span>Done {member.completed}</span>
            </div>

            <div className="team-actions">
                <button 
                className="view-btn"
                onClick={() => onViewProfile(member)}
                >
                    View Profile
                </button>

                <button 
                className="delete-btn"
                onClick={() => onRemoveMember(member.id)}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}
export default TeamCard;
