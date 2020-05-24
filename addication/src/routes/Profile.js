import React, {useState, useContext} from 'react';
import GlobalContext from "../context/GlobalContext";

//import './App.css';

function Profile() {

  const[globalData] = useContext(GlobalContext);

  return (

    <div>
        <p>
            username: {globalData.user.username};
        </p>
    </div>
  );

    
}

export default Profile;