import React, { useState } from "react";
import { Button } from "@material-ui/core";

const UserList = ({ users }) => {
  const [user, setUser] = useState("");
  const [allUser, setAllUser] = useState(users);
  return (
    <>
     
      <h2>Total users: {allUser.length}</h2>
      {allUser.map((user) => (
        <div>{user}</div>
      ))}
     
      <input
        type="text"
        name="user"
        placeholder="Add user name"
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setAllUser([...allUser,user])}
      >
        Add
      </Button>
    </>
  );
};

export default UserList;
