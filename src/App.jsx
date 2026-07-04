import { useState } from "react";
import Login from "./pages/Login/Login"
import MainLayout from "./Layout/MainLayout";
import Projects from "./pages/Projects/Projects";
function App(){
  const[user, setUser] = useState(null)
  return (
    <>
      {/* {!user ? (
        <Login onLogin={setUser} />
      ) : (
        
        <MainLayout/>
      )} */}
      <Projects/>
    </>
  )
}

export default App;
