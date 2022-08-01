import React from "react";

const Message = ({history, posts, baseURL, useParams, token, message, setMessage, }) => {
    const { id } = useParams()

    const messagePost = posts.filter((eachPost) => {
        return eachPost._id === id
    })

    const handleMessage = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseURL}/posts/${id}/messages`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    message: {
                        content: message
                    }
                })
            })
            const data = await response.json();
            console.log('message data:', data);
            setMessage("")
            history.push('/posts')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div style={{ border: "1px solid black", boxShadow: "3px 3px gray", padding: "5px"}}>
                <p> {messagePost[0].title} </p>
                <p> {messagePost[0].description} </p>
                <p>Price: {messagePost[0].price}</p>
                <p>Seller: {messagePost[0].author.username}</p>
                <p>Location: {messagePost[0].location}</p> 
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <p>Message User about This Post</p>
                    <form onSubmit={handleMessage}>
                        <input value={message} onChange={(e) => setMessage(e.target.value)} type='text' placeholder="Message*"></input>
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
        </div>
    )
}

export default Message