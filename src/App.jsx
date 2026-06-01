import { useState } from "react";
import Login from "./pages/Login/Login"
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainLayout from "./Layout/MainLayout";

function App(){
  const[user, setUser] = useState(null)
  return (
    <>
      {/* {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <div className="dashboard">
          <main className="main-content">
            <Header user={user} />
            <Sidebar/> 
          </main>
        </div>
      )} */}
      <MainLayout/>
    </>
  )
}

export default App;
