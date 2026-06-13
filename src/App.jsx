import { useState } from "react";
import Login from "./pages/Login/Login"
import MainLayout from "./Layout/MainLayout";
import Calendar from "./components/Calendar/Calendar";
function App(){
  const[user, setUser] = useState(null)
  return (
    <>
      {/* {!user ? (
        <Login onLogin={setUser} />
      ) : (
        
        <MainLayout/>
      )} */}
      <Calendar/>
    </>
  )
}

export default App;
