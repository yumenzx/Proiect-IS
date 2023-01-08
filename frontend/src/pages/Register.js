import React, { useState } from 'react';
import "./../styles.css";

export const Register = (props) => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();


    function handleQuery() {
        fetch('http://localhost:5109/api/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FirstName: firstName,
                LastName: lastName,
                ContactNumber: contactNumber,
                Email: email,
                Password: password,
                Role: "client"
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed with error: ' + error);
                })
    }

    function handleSubmit(ev) {
        if (firstName.trim().length === 0) {
            alert("Please fill your firstname");
            return;
        }
        if (lastName.trim().length === 0) {
            alert("Please fill your lastname");
            return;
        }
        if (contactNumber.trim().length === 0) {
            alert("Please fill your contact number");
            return;
        }
        if (email.trim().length === 0) {
            alert("Please fill your email address");
            return;
        }
        if (password.trim().length < 3) {
            alert("Password must be 3 characters long at least");
            return;
        }
        if (password !== confirmPassword) {
            alert("Entered passwords does not match");
            return;
        }
        handleQuery();
    }

    return (
        <div className='registerBackground'>
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Register</h3>
                    <div className="form-group mt-3">
                        <label>First Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="First Name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Contact Number</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Contact Number"
                            value={contactNumber}
                            onChange={e => setContactNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email Address</label>
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
                    <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={() => handleSubmit()}>
                            Submit Registration
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
}