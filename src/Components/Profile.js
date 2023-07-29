import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

const Profile = () =>{

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect (() => {
        fetch(`https://dummyjson.com/users/${user.id}`)
        .then(res => (res.json()))
        .then(res => {
            dispatch({ type: 'SAVE_USER_DETAILS', payload: res })
        });
    }, [user.id, dispatch])



    return(
        <div className="container">
            {
                user &&
                <div className="user-info">
                    <div>ID: <span>{user.id}</span></div>
                    <div>Username: <span>{user.username}</span></div>
                    <div>Email: <span>{user.email}</span></div>
                    <div>Firstname: <span>{user.firstName}</span></div>
                    <div>Lastname: <span>{user.lastName}</span></div>
                    <div>Gender: <span>{user.gender}</span></div>
                </div>
            }
        </div>
    )
}

export default Profile;