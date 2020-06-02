import React, {useState, useContext} from 'react';
import {useGlobalState,useGlobalDispatch} from '../context/GlobalContext';

//import './App.css';

function Profile() {
  const { user } = useGlobalState();
  return (

    <div>
        <p>
          {user.username}
        </p>
    </div>
  );

    
}

export default Profile;