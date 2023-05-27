import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {logout} from '../actions/actions';

const Profile = () => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
        
    useEffect(() => {
        
    });

    const handleLogout =  () => {
        dispatch(logout());
        navigate('/');
    }
    return (
        <div>
            <h1>Profile</h1>
            <p>Full Name: {user.fullName}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <button onClick = {handleLogout}>Logout</button>
        </div>
    )
}

export default Profile