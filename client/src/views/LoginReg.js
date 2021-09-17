import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from 'axios';

const LoginReg = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [regErrors, setRegErrors] = useState({});
    const [loginEmail, setLoginEmail] =useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginErrors, setLoginErrors] = useState({});
    const history = useHistory();


    const onSubmitHandlerReg = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/new', {
            firstName: firstName
            , lastName: lastName
            , email: email
            , username: username
            , password: password
        })
            .then(res => {
                if (res.data.results) {
                    props.setId(email);
                    history.push('/pirates');
                } else {
                    console.log(res.data.err.errors)
                    setRegErrors(res.data.err.errors);
                }
            })
            .catch(err => console.log(err))
    }

    const onSubmitHandlerLogin = (e) => {
        e.preventDefault();    
        console.log(loginEmail)
        console.log(loginPassword)
        axios.post('http://localhost:8000/api/users/one', {
            email: loginEmail
            , password: loginPassword
        })
            .then(res => {
                console.log('results')
                console.log(res.data.results);
                if (res.data.results !== null) {
                    props.setId(loginEmail);
                    history.push('/pirates');
                } else {
                    console.log("error")
                    console.log(res.data)
                    setLoginErrors({message: 'Invalid Email or Password'});
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
                <h1>Register For Our Awesome Crew!!! ArrMatey</h1>
                <form onSubmit={onSubmitHandlerReg}>
                    <span>{regErrors.firstName ? regErrors.firstName.message : ''}</span><span>{!regErrors.firstName && firstName.length < 2 && firstName.length >= 1 && 'First Name must be at least two characters long'}</span>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/><br />
                    <span>{regErrors.lastName ? regErrors.lastName.message : ''}</span><span>{!regErrors.lastName && lastName.length < 2 && lastName.length >= 1 && 'Last Name must be at least two characters long'}</span>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/><br />
                    <span>{regErrors.username ? regErrors.username.message : ''}</span><span>{!regErrors.username && username.length < 3 && username.length >= 1 && 'Username must be at least three characters long'}</span>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br />
                    <span>{regErrors.email ? regErrors.email.message : ''}</span>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br />
                    <span>{regErrors.password ? regErrors.password.message : ''}</span><span>{!regErrors.password && password.length < 4 && password.length >= 1 && 'Password must be at least four characters long'}</span>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br />
                    <input type="submit" value="Create Account"/>
                </form>
            </div>
            <div>
                <h1>Login Here!</h1>
                <form onSubmit={onSubmitHandlerLogin}>
                    <span>{loginErrors.message}</span><br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={loginEmail} onChange={(e)=>{setLoginEmail(e.target.value)}}/><br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={loginPassword} onChange={(e)=>{setLoginPassword(e.target.value)}}/><br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}
export default LoginReg;