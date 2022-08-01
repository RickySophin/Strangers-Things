import React, { useEffect } from "react";

const Profile = ({username, isLoggedIn, token, baseURL, myData, setMyData}) => {
    useEffect (() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${baseURL}/users/me`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });
                const userData = await response.json();
                console.log("this is the userData:", userData.data.messages);
                setMyData(userData.data.messages);
                console.log('this is myData:', myData);
            } catch (error) {
                console.log(error)
            }
        };
        fetchUserData();
    }, []);
    return (
    <div>
        {
        isLoggedIn ? 
        <div>
            <h1 style={{textAlign: "center"}}>Welcome {username}</h1>
            <p style={{textAlign: "center"}}>Messages to Me:</p>
            { myData.filter((each) => {return each.fromUser.username !== username}).map((eachMessage, idx) => {
                return <div key={idx} style={{border: "1px solid black", boxShadow: "3px 3px gray", padding: "5px"}} >
                    <p> From: {eachMessage.fromUser.username} </p>
                    <p> {eachMessage.content} </p>
                    <p>Post: {eachMessage.post.title}</p>
                </div> 
            })
            }
            <p style={{textAlign: "center"}}>Messages from Me:</p>
            { myData.filter((each) => {return each.fromUser.username === username}).map((eachMessage, idx) => {
                return <div key={idx} style={{border: "1px solid black", boxShadow: "3px 3px gray", padding: "5px"}} >
                    <p> From: {eachMessage.fromUser.username} </p>
                    <p> {eachMessage.content} </p>
                    <p>Post: {eachMessage.post.title}</p>
                </div> 
            })
            }
        </div>
        : <div>Please login</div>
        }
    </div>
    )
}

export default Profile