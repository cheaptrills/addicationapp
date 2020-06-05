import React, {useState, useContext} from 'react';
import {useUserState} from "../context/UserContext";

//import './App.css';

function Profile() {
  const {user} = useUserState();
  return (

    <div>
        <p>
          {user.username}
        </p>
    </div>
  );

    
}

export default Profile;