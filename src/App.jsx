import { useState } from "react";
import Login from "./pages/Login/Login"
import MainLayout from "./Layout/MainLayout";
import Profile from "./pages/Profile/Profile";
function App(){
  const[user, setUser] = useState(null)
  return (
    <>
      {/* {!user ? (
        <Login onLogin={setUser} />
      ) : (
        
        <MainLayout/>
      )} */}
      <Profile/>
    </>
  )
}

export default App;
