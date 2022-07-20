import React from "react";

const PostList = ({posts}) => {

    function sendMessage (evt) {
        evt.target.style.backgroundColor = 'blue';
    }

    return (
        <div>
        {
            posts.length ? posts.map((eachPost, idx) => {
                return <div key={idx} style={{border: "2px solid lavender"}}>
                    <p> {eachPost.title} </p>
                    <p> {eachPost.description} </p>
                    <p>Price: {eachPost.price}</p>
                    <p>Seller: {eachPost.author.username}</p>
                    <p>Location: {eachPost.location}</p>
                    <button onClick={sendMessage}>SEND MESSAGE</button>
                </div>
            }) : <div>No posts</div>
        }
        </div>
    )
}

export default PostList