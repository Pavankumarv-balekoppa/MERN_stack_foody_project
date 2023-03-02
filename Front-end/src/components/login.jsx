import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/login.css'
import axios from "axios";


const Login = () => {
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let navigate=useNavigate()
    let handlesubmit = (e) => {
        e.preventDefault()
        let data={email,password}
        axios.post('http://localhost:4000/login',data)
        .then((res)=>{
            if(res.data.message === 'login successfull')
            {
                navigate('/home')
            }
            else
            {
                alert(res.data.message)
            }
        })


    }

    return (
        <div className="login">
            <h1>Login page</h1>
            <div className="login_form w-25 " id="login1" >
                <form action="" onSubmit={handlesubmit}>
                    <div className="email">
                        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" placeholder="enter email" />
                    </div>
                    <div className="pwd1">
                        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" placeholder="enter password" />
                    </div>
                    <div className="login_button">
                        <button className="btn  btn-primary">Login</button>
                    </div>
                    <div className="signUp_button ">
                        <p>Are you a new user?</p>
                        <Link className="btn btn-outline-primary" to="/Signup">Signn up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;