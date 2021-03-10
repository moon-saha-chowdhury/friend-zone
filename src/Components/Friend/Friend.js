import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Friend = (props) => {
    const {name, email, id} =props.friend;
    const history = useHistory();

    const handleClick=(friendId)=>{
        const url =`/friend/${friendId}`;
        history.push(url);
    }
    const friendStyle ={
        border: "2px solid purple",
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>
                <button>Show Detail Of {id}</button>
                 </Link>
                 <button onClick={() => handleClick(id)} style={{marginLeft:'10px'}}>Click Me</button>
            
        </div>
    );
};

export default Friend;