import React, { useState } from 'react';

export const Login = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    function handleQuery() {
        fetch('http://localhost:5109/api/user/' + email + '/' + password).then(res => res.json())
            .then((result) => {
                if (result.substring(0,7) === "SUCCESS") {
                    props.userAuthentication(email,result.substring(8));
                } else {
                    alert("Incorrect combination");
                }
            },
                (error) => {
                    alert('Failed with error: ' + error);
                })


    }

    function handleSubmit(ev) {

        if (email.trim().length === 0) {
            alert("Please fill your email address");
            return;
        }
        if (password.trim().length === 0) {
            alert("Please fill your password");
            return;
        }
        handleQuery();
    }

    return (
        <div class="backgroundStyle">
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={() => handleSubmit()}>
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
}