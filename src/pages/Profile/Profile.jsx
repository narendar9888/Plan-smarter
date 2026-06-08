import React, { useEffect, useState } from "react";
import avatar from "../../assets/avatar.webp";
import "./Profile.css"
import {
  Mail,
  MapPin,
  Phone,
  Globe,
  Crown,
  FolderKanban,
  Clock3,
  Flame,
  SquareCheckBig
} from "lucide-react";
function Profile() {
    const [activeTab, setActiveTab] = useState("about");
    const [isEditing, setIsEditing] = useState(false);

    const [userData, setUserData] = useState({
        fname: "Guest",
        lname: "Kumar",
        email: "guest@gmail.com",
        workTag: "Product Designer at Plan Smarter",
        phone: "00000000",
        profileimage: "",
        bio: "Hiii",
        location: "State",
        country: "India",
        darkMode: false,
        noti: false,

    });

    useEffect(() =>{
        const savedData = localStorage.getItem("profileData");

        if (savedData){
            setUserData(JSON.parse(savedData));
        }
    },[])


    const handleSave = () => {
        localStorage.setItem(
            "profileData",
            JSON.stringify(userData)
        );
        setIsEditing(false);
        alert("Profile Update Successfully!")
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0]

        if (!file) return ;

        const rander = new FileReader();
        
        rander.onloadend = () => {
            setUserData({
                ...userData,
                profileimage: rander.result,                
            });
        };
        rander.readAsDataURL(file);
    };

    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-left">
                    <img src={userData.profileimage || avatar} alt="profile" className="profile-img"/>
                    {isEditing && (
                        <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        />
                    )}
                    <div className="profile-info">
                        <span className="pro-badge">
                            <Crown size={16} className="pro-crown"></Crown> Pro User
                        </span>
                        <h2>{userData.fname} {userData.lname}</h2>
                        <p className="work">{userData.workTag}</p>
                        <div className="contact">
                            <p><MapPin size={18}></MapPin>{userData.location}, {userData.country}</p>
                            <p><Mail size={18}></Mail> {userData.email}</p>
                            <p><Phone size={18}></Phone> {userData.phone}</p>
                        </div>
                    </div>
                </div>
                <button 
                    className="edit-btu"
                    onClick={() =>
                        setIsEditing(!isEditing)
                    }
                    >
                        {isEditing ? "Cancel"
                        : "Edit Profile"}
                        </button>
            </div>

            {/* stat */}

            <div className="stat-grid">
                <div className="stat-cart">
                    <SquareCheckBig/>
                    <h3>128</h3>
                    <p>Task Completed</p>
                </div>
                <div className="stat-cart">
                    <FolderKanban/>
                    <h3>24</h3>
                    <p>Project</p>
                </div>
                <div className="stat-cart">
                    <Clock3/>
                    <h3>342</h3>
                    <p>Focus Hours</p>
                </div>
                <div className="stat-cart">
                    <Flame/>
                    <h3>12</h3>
                    <p>Day Streak</p>
                </div>
            </div>

            <div className="profile-content">
                <div className="left-content">
                    <div className="tabs">
                        <button className={activeTab === "about"
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                            setActiveTab("about")
                        }
                        >
                            About
                        </button>

                        <button className={activeTab === "personal"
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                            setActiveTab("personal")
                        }
                        >
                            Personal
                        </button>

                        <button className={activeTab === "preferences"
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                            setActiveTab("preferences")
                        }
                        >
                            Preferences
                        </button>

                        <button className={activeTab === "security"
                            ? "active"
                            : ""
                        }
                        onClick={() => 
                            setActiveTab("security")
                        }
                        >
                            Security
                        </button>
                    </div>


                    <div className="tab-contant">
                        {activeTab === "about" && (
                            <div className="card">

                                <h3>About Me</h3>

                                {isEditing ? (
                                    <textarea
                                    rows="4"
                                    value={userData.bio}
                                    onChange={(e) =>
                                        setUserData (
                                            {...userData,
                                                bio: e.target.value,
                                            })
                                    }
                                    />
                                )
                                : (
                                <p>{userData.bio}</p>
                            )}
                            <h3>Skills</h3>
                            </div>
                        )}
                        {activeTab === "personal" && (
                            <div className="card">

                                <h3>Personal Informations</h3>

                                <label>First Name</label>
                                <input type="text"
                                value={userData.fname}
                                disabled={!isEditing}
                                onChange={(e) => 
                                    setUserData ({
                                        ...userData,
                                        fname: e.target.value
                                    })
                                }
                            />

                                <label>Last Name</label>
                                <input type="text"
                                value={userData.lname}
                                disabled={!isEditing}
                                onChange={(e) => 
                                    setUserData ({
                                        ...userData,
                                        lname: e.target.value
                                    })
                                }
                            />

                                <label>Email</label>
                                <input
                                    value={userData.email}
                                    disabled={!isEditing}
                                    onChange={(e) => 
                                        setUserData (
                                            {...userData,
                                                email: e.target.value,
                                            })
                                        }
                                    />

                                <label>Phone Number</label>
                                <input
                                value={userData.phone}
                                disabled={!isEditing}
                                onChange={(e) =>
                                    setUserData (
                                        {...userData,
                                            phone: e.target.value
                                        }
                                    )
                                }
                                />
                                <label>Location</label>
                                <input
                                value={userData.location}
                                disabled={!isEditing}
                                onChange={(e) => 
                                    setUserData ({
                                        ...userData,
                                        location: e.target.value,
                                    })
                                }
                                />
                                    
                            </div>
                        )}
                        {activeTab === "preferences" && (
                            <div className="card">

                                <h3>Preferences</h3>

                                <div className="setting-row">
                                    <span>Dark Mode</span>

                                    <input type="checkbox"
                                    checked={userData.darkMode}
                                    onClick={(e) =>
                                        setUserData ({
                                            ...userData,
                                            darkMode: e.target.checked,
                                        })
                                    }
                                    />
                                </div>
                                <div className="setting-row">
                                    <span>Notifactions</span>

                                    <input type="checkbox"
                                    checked={userData.noti}
                                    onClick={(e) =>
                                        setUserData ({
                                            ...userData,
                                            noti: e.target.checked,
                                        })
                                    }
                                    />
                                </div>
                            </div>
                        )
                        }

                        {activeTab === "security" && (
                            <div className="card">
                                <h3>Security Setting</h3>

                                <input type="password"
                                placeholder="Current password"
                                />

                                <input type="password"
                                placeholder="New password"
                                />

                                <input type="password"
                                placeholder="Confirm password"
                                />

                                <button className="change-btu">
                                    Change Password
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {isEditing && (
                <button
                    className="save-btu"
                    onClick={handleSave}
                >
                    Save Change
                </button>
            )}
        </div>

    )
}

export default Profile;

