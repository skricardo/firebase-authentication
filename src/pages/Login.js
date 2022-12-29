import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";

export const Login = () => {
    const {signIn} = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [loading, setLoading] = useState (false);

    async function handleSubmit(element) {
        element.preventDefault(); 
        
        setLoading (true);

        if (password.length <6){
            alert("Password no minimo 6 caracteres");
            setLoading(false);
            return;
        }
        try {
            await signIn(email, password);
            navigate("/");
        } catch (error) { 
            alert("Ocorreu um erro ao tentar efetuar o login");
        }
        setLoading(false);
    }

  return (
        <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} >
            <label>Email</label>
            <input 
            type="email" 
            value={email}
            onChange={(element) => setEmail(element.target.value)}
            />
            <label>Senha</label>
            <input 
            value={password}
            type="password"
            onChange={(element) => setPassword(element.target.value)}
            />

            <button  disabled={loading}  className="button-block" type="submit">
                Login
            </button>   
        </form>

        <div className="center">
                <div>
                <p>
                    Esqueceu a senha? <Link to="/forgot-password">Nova senha </Link>
                </p>
                <p>
                        Criar nova conta? <Link to="/signup">Cadastrar</Link>
                </p>
                </div>
    </div>
    </div>
    );
  };