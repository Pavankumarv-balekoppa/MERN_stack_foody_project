import '../styles/register.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [number, setNumber] = useState("")
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        let data = { name, number, email, password, confirmPassword }
        if (name && number && email && (password === confirmPassword)) {
            axios.post('http://localhost:4000/signup', data)
                .then((res) => {
                    alert(res.data.message)
                    navigate('/')
                    // console.log(data);
                })
        } else {
            alert("invalid credentials")
        }
    }
    return (
        <div className="sign1">
            <div className="card-body">
                <h1 className="text-center">Sign Up</h1>
                <form action="" onSubmit={handleSubmit} >
                    <div className="form-group w-25 px-5" id='sign2'>
                        <div className="name my-4">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="enter name"
                                name="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="email my-4">
                            <input
                                className="form-control"
                                type="number"
                                placeholder="mobile number"
                                name="number"
                                required
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                        <div className="email my-4">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="email address"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="password my-4">
                            <input
                                className="form-control"
                                type="password"
                                placeholder="enter password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="password my-4">
                            <input
                                className="form-control"
                                type="password"
                                placeholder="re-enter password"
                                name="confrimPassword"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="loginButton my-4">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                        <div className="registerButton my-4">
                            <p>Already having an account?</p>
                            <Link to="/" className="btn btn-outline-primary px-5">Login</Link>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Register;