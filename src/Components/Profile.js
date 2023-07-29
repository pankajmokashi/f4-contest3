import { useEffect, useState } from "react";

const Profile = () =>{

    let [result, setResult] = useState("")

    useEffect (() => {
        loadData();
    }, [])

    async function loadData(){
        fetch('https://dummyjson.com/users/1')
        .then(res => (res.json()))
        .then(res => setResult(res));
    }

    return(
        <div className="container">
            {
                result &&
                <div className="user-info">
                    <div>ID: <span>{result.id}</span></div>
                    <div>Username: <span>{result.username}</span></div>
                    <div>Email: <span>{result.email}</span></div>
                    <div>Firstname: <span>{result.firstName}</span></div>
                    <div>Lastname: <span>{result.lastName}</span></div>
                    <div>Gender: <span>{result.gender}</span></div>
                    <div>Address: <span>{result.address.address}, {result.address.city}</span></div>
                </div>
            }
        </div>
    )
}

export default Profile;