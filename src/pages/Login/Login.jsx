import { useState } from "react";
import "./Login.css";

function Login({ onLogin }){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")

    const handleLogin = (e) => {
        e.preventDefault();
    

    if (!name || !email || !password) {
        alert("Please fill all fields")
        return;
    }

    let user = JSON.stringify({name,email});

    localStorage.setItem("user" , user);

    onLogin({
        name,
        email,
    });
}

    return (
        <div className="login-page">
            <div className="login-card">
                <h1>Your World</h1>
                <h2>Welcome Back</h2>
                <p>Turn your goals into reality by staying consistent and focused.</p>

                <form onSubmit={handleLogin}>
                    <input 
                    type="text" 
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />


                    <input 
                    type="email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                    type="password" 
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <br />

                    <button type="submit">Login</button>

                </form>
            </div>
        </div>
    )
}

export default Login;


