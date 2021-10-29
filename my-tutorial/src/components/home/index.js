import React, {useState, useEffect} from 'react';
import './home.css'
import axios from "axios";


export default function Home(){

    const [user, setUser] = useState(['']);
    const [availableUser, setavailableUser] = useState(false);
    const [errorUser, seterrorUser] = useState(false);

    useEffect(() => {
        axios.get("asd")
        .then(res => {            
            setTimeout(() => { 
                setUser(res.data);
                setavailableUser(true);
             }, 3000);
        })
        .catch(error => {
            setavailableUser(true);
            seterrorUser(true);
        })
    });

    return(
        <div>

            <div className="homeStyle">Home</div>
            {availableUser ? 
             user.map((users, index) => (
                <div className="parent" key={index}>
                    {users.username}, {users.email}
                </div> 
            ))
            : 'Loading'
            
            }    
            {errorUser ? '404 error' : '' }       
        </div>        
    )
}