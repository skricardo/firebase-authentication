import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Signup = () => {
    const {SignUp} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(element) {
        element.preventDefault();

        setLoading(true);

        if(password.length <6){
            alert("Password no minimo 6 caracteres");
            setLoading(false);
            return;
        }

        if(password !== confirmPassword){
            alert("As senhas não conferem");
            setLoading(false);
            return;
        }

        try {
            await SignUp(email, password);
        } catch (error) { 
            alert("Ocorreu um erro ao tentar criar um usuário");
            }
            setLoading(false);
        }
    return (
        <div className="container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input 
                type="email" 
                value={email}
                onChange={(element) => setEmail(element.target.value)}
                />
                <label>Password</label>
                <input 
                value={password}
                type="password"
                onChange={(element) => setPassword(element.target.value)}
                />
                <label>Password confirmation</label>
                <input 
                value={confirmPassword}
                type="password"
                onChange={(element) => setconfirmPassword(element.target.value)}    
                />

                <button disabled={loading} className="button-block" type="submit">
                    Cadastrar
                    </button>   
            </form>

            <div className="center">
                <div>
                <p>
                    Já possui uma conta? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
        </div>
    )
}