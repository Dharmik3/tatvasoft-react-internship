import React from "react";
import { Button } from "@material-ui/core";

const UserList = ({ length, users}) => {
   
  return (
    <>
      <h2>Total users: {length}</h2>
      {users.map((user) => (
        <div>{user}</div>
      ))}
     
      <Button variant="outlined" color="primary" onClick={()=>alert('added')}>
        Add
      </Button>
    </>
  );
};

export default UserList;
