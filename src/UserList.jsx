import React from "react";


const UserList = ({ length, users }) => {
    return (
        <>
            <h2>Total users: {length}</h2>
            {users.map(user =>  <div>{user}</div>)}
        </>)
};

export default UserList;
