import { useState } from "react";
import Login from "./components/Login/Login"
import Header from "./components/Header/Header";

function App(){
  const[user, setUser] = useState(null)
  return (
    <>
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <div className="dashboard">
          <main className="main-content">
            <Header user={user} />
          </main>
        </div>
      )}
    </>
  )
}

export default App;
