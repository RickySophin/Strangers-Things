import React, { useEffect, useState } from "react";

const SinglePost = ({username, message, setMessage, useParams, token, posts, baseURL, history}) => {
    const { id } = useParams();

    let deletePost = posts.filter((eachPost) => {
        return eachPost._id === id
    })

    const handleSubmit = async () => {
        try {
            const response = await fetch(`${baseURL}/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                })
            const data = await response.json();
            console.log("this is the response:", data)
            history.push("/posts")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div style={{ border: "1px solid black", boxShadow: "3px 3px gray", padding: "5px"}}>
            <p> {deletePost[0].title} </p>
            <p> {deletePost[0].descriptiindivPost}</p>
            <p>Price: {deletePost[0].price}</p>
            <p>Seller: {deletePost[0].author.username}</p>
            <p>Location: {deletePost[0].location}</p> 
            <button onClick={handleSubmit}>DELETE</button>
        </div>
    )
}

export default SinglePost