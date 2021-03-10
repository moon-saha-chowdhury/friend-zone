import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const [friendDetail, setFriendDetail] = useState({});
    const{friendId} = useParams();
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setFriendDetail(data))
    },[])
    return (
        <div>
            <p>This is friend details: {friendId}</p>
            <h3>{friendDetail.name}</h3>
            <p>{friendDetail.email}</p>
            <p>{friendDetail.phone}</p>
            <p>{friendDetail.website}</p>
        </div>
    );
};

export default FriendDetail;