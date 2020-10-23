import React,{ useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import logo from "./images/logo2.png";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault(); // this stop the refresh;
        // Do the login logic here
        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth) => {
            // logged In
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };

    const create = (event) => {
        event.preventDefault(); // this stop the refresh;
        // Do the create logic here
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // user created and Logged in
            history.push("/")
        })
        .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src={ logo } alt="" />
            </Link>
            <div className="login__container">
                <h1> Sign In </h1>
                <form>
                    <h5> E-mail </h5>
                    <input onChange={event => setEmail(event.target.value)} type="email" />
                    <h5> Password </h5>
                    <input onChange={event => setPassword(event.target.value)}type="password" />
                    <button onClick={login} type="submit" className="login__signInButton"> Sign In </button>
                </form>
                <p> By signing-in you agree to IndoCharcuterie's Terms & Conditions of Use of site. Please see our Privacy Policy.</p>
                <button onClick={create} className="login__createButton"> Create your IndoCharcuterie Account </button>
            </div>
        </div>
    )
}

export default Login;
