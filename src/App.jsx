import { useState } from "react";
import Login from "./pages/Login/Login"
import MainLayout from "./Layout/MainLayout";
import Team from "./pages/Team/Team";
function App(){
  const[user, setUser] = useState(null)
  return (
    <>
      {/* {!user ? (
        <Login onLogin={setUser} />
      ) : (
        
        <MainLayout/>
      )} */}
      <Team/>
    </>
  )
}

export default App;
