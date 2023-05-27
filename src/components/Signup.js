import React, { useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {v4 as uuid} from 'uuid'

import {signup} from '../actions/actions'

const Signup = () => {
    let [fullName, setFullName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')
    let [successMessage, setSuccessMessage] = useState('')
    let [errorMessage, setErrorMessage] = useState('')
    let [accessToken, setAccessToken] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        
    });

  
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (fullName === '' || email === '' || password === '' || confirmPassword === '') {
            setErrorMessage('Please fill all the fields');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        const token = uuid();
        setAccessToken(accessToken);

        let user = {
            fullName,
            email,
            password,
            confirmPassword,
            token
        }

        // localStorage.setItem('user', JSON.stringify(user));

        dispatch(signup(user));
        setSuccessMessage('Signup successfully');
        setErrorMessage('');

        setTimeout(() => {
            setFullName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setSuccessMessage('');
            setErrorMessage('');
            navigate('/profile');
        }, 2000);      
        
    }

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                    <div>
                    <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>

                { successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
                { errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                
                <button type="submit">Signup</button>       
            </form>
        </div>
    )
}

export default Signup