import React, { useEffect, useState } from "react";
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
        countary: "India",
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
        const files = e.target.files

        if (!files) return ;

        const rander = new FileReader();
        
        rander.onloadend = () => {
            setUserData({
                
            })
        }
    }

    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-left">
                    <img src="./src/assets/avatar.webp" alt="profile" className="profile-img"/>
                    <div className="profile-info">
                        <span className="pro-badge">
                            <Crown size={16} className="pro-crown"></Crown> Pro User
                        </span>
                        <h2>{userData.fname} {userData.lname}</h2>
                        <p className="work">{userData.workTag}</p>
                        <div className="contact">
                            <p><MapPin size={18}></MapPin>{userData.location},{userData.countary}</p>
                            <p><Mail size={18}></Mail>{userData.email}</p>
                            <p><Phone size={18}></Phone>{userData.phone}</p>
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
                                onClick={(e) => 
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
                                onClick={(e) => 
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
                                    onClick={(e) => 
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
                                onClick={(e) =>
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
                                onClick={(e) => 
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


// import React, { useState, useEffect } from "react";
// import "./Profile.css";

// function Profile() {
//   const [activeTab, setActiveTab] = useState("about");
//   const [isEditing, setIsEditing] = useState(false);

//   const [userData, setUserData] = useState({
//     name: "Narendar Kumar",
//     email: "narendar@gmail.com",
//     phone: "+91 9876543210",
//     location: "Rajasthan, India",
//     bio: "CS & AI Student interested in Web Development and Cybersecurity.",
//     profileImage: "",
//     darkMode: false,
//     notifications: true,
//   });

//   useEffect(() => {
//     const savedData = localStorage.getItem("profileData");

//     if (savedData) {
//       setUserData(JSON.parse(savedData));
//     }
//   }, []);

//   const handleSave = () => {
//     localStorage.setItem(
//       "profileData",
//       JSON.stringify(userData)
//     );

//     setIsEditing(false);
//     alert("Profile Updated Successfully!");
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];

//     if (!file) return;

//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setUserData({
//         ...userData,
//         profileImage: reader.result,
//       });
//     };

//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="profile-page">

//       <div className="profile-header">

//         <div className="profile-left">

//           <div className="profile-image-box">
//             <img
//               src={
//                 userData.profileImage ||
//                 "https://i.pravatar.cc/300"
//               }
//               alt="Profile"
//               className="profile-image"
//             />

//             {isEditing && (
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//               />
//             )}
//           </div>

//           <div className="profile-info">

//             {isEditing ? (
//               <input
//                 value={userData.name}
//                 onChange={(e) =>
//                   setUserData({
//                     ...userData,
//                     name: e.target.value,
//                   })
//                 }
//               />
//             ) : (
//               <h2>{userData.name}</h2>
//             )}

//             <span className="badge">
//               👑 Pro User
//             </span>

//             <p>{userData.location}</p>

//           </div>
//         </div>

//         <button
//           className="edit-btn"
//           onClick={() =>
//             setIsEditing(!isEditing)
//           }
//         >
//           {isEditing
//             ? "Cancel"
//             : "Edit Profile"}
//         </button>
//       </div>

//       <div className="tabs">

//         <button
//           className={
//             activeTab === "about"
//               ? "active"
//               : ""
//           }
//           onClick={() =>
//             setActiveTab("about")
//           }
//         >
//           About
//         </button>

//         <button
//           className={
//             activeTab === "personal"
//               ? "active"
//               : ""
//           }
//           onClick={() =>
//             setActiveTab("personal")
//           }
//         >
//           Personal Info
//         </button>

//         <button
//           className={
//             activeTab === "preferences"
//               ? "active"
//               : ""
//           }
//           onClick={() =>
//             setActiveTab("preferences")
//           }
//         >
//           Preferences
//         </button>

//         <button
//           className={
//             activeTab === "security"
//               ? "active"
//               : ""
//           }
//           onClick={() =>
//             setActiveTab("security")
//           }
//         >
//           Security
//         </button>

//       </div>

//       <div className="tab-content">

//         {activeTab === "about" && (
//           <div className="card">
//             <h3>About Me</h3>

//             {isEditing ? (
//               <textarea
//                 rows="4"
//                 value={userData.bio}
//                 onChange={(e) =>
//                   setUserData({
//                     ...userData,
//                     bio: e.target.value,
//                   })
//                 }
//               />
//             ) : (
//               <p>{userData.bio}</p>
//             )}

//             <h3>Skills</h3>

//             <div className="skills">
//               <span>React</span>
//               <span>JavaScript</span>
//               <span>HTML</span>
//               <span>CSS</span>
//               <span>Python</span>
//               <span>Cybersecurity</span>
//             </div>
//             <h3>Work Experience</h3>

//              <div className="experience">
//                <div>
//                  <h4>Product Designer</h4>
//                  <p>Plan Smarter • 2022 - Present</p>
//                </div>

//                <div>
//                  <h4>UI/UX Designer</h4>
//                  <p>Creative Studio • 2019 - 2021</p>
//                </div>

//                <div>
//                  <h4>Junior Designer</h4>
//                  <p>Design Lab • 2018 - 2019</p>
//                </div>
//              </div>
//           </div>
//         )}

//         {activeTab === "personal" && (
//           <div className="card">

//             <h3>Personal Information</h3>

//             <label>Email</label>

//             <input
//               value={userData.email}
//               disabled={!isEditing}
//               onChange={(e) =>
//                 setUserData({
//                   ...userData,
//                   email: e.target.value,
//                 })
//               }
//             />

//             <label>Phone</label>

//             <input
//               value={userData.phone}
//               disabled={!isEditing}
//               onChange={(e) =>
//                 setUserData({
//                   ...userData,
//                   phone: e.target.value,
//                 })
//               }
//             />

//             <label>Location</label>

//             <input
//               value={userData.location}
//               disabled={!isEditing}
//               onChange={(e) =>
//                 setUserData({
//                   ...userData,
//                   location: e.target.value,
//                 })
//               }
//             />

//           </div>
//         )}

//         {activeTab === "preferences" && (
//           <div className="card">

//             <h3>Preferences</h3>

//             <div className="setting-row">
//               <span>Dark Mode</span>

//               <input
//                 type="checkbox"
//                 checked={userData.darkMode}
//                 onChange={(e) =>
//                   setUserData({
//                     ...userData,
//                     darkMode:
//                       e.target.checked,
//                   })
//                 }
//               />
//             </div>

//             <div className="setting-row">
//               <span>
//                 Notifications
//               </span>

//               <input
//                 type="checkbox"
//                 checked={
//                   userData.notifications
//                 }
//                 onChange={(e) =>
//                   setUserData({
//                     ...userData,
//                     notifications:
//                       e.target.checked,
//                   })
//                 }
//               />
//             </div>

//           </div>
//         )}

//         {activeTab === "security" && (
//           <div className="card">

//             <h3>Security Settings</h3>

//             <input
//               type="password"
//               placeholder="Current Password"
//             />

//             <input
//               type="password"
//               placeholder="New Password"
//             />

//             <input
//               type="password"
//               placeholder="Confirm Password"
//             />

//             <button className="change-pass">
//               Change Password
//             </button>

//           </div>
//         )}

//       </div>

//       {isEditing && (
//         <button
//           className="save-btn"
//           onClick={handleSave}
//         >
//           Save Changes
//         </button>
//       )}

//     </div>
//   );
// }

// export default Profile;