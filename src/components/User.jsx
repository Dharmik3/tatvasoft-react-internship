import React from 'react'
import UserList from './UserList';

const users = ["Dharmik", "John", "Jindal", "Tim","Kush"];
const User = () => {
 
    return (
      <>
            <div>User</div>
        <UserList length={users.length} users={users}  />
      </>
    );
}

export default User