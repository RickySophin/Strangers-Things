import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./posts.css";

const Post = ({history, posts, baseURL, setPosts, search, setSearch, filteredPosts, setFilteredPosts, username}) => {
    useEffect (() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${baseURL}/posts`);
                const postsJ = await response.json();
                console.log("got posts: ", postsJ);
                setPosts(postsJ.data.posts);
            } catch (error) {
                console.error(error)
            }
        };
        fetchPosts();
    }, []);

    function searchPosts (searchInput) {
        setSearch(searchInput)
        let searchedPosts = posts.filter((eachPost) => {
            return Object.values(eachPost).join('').toLowerCase().includes(search.toLowerCase()) || 
            Object.values(eachPost.author).join('').toLowerCase().includes(search.toLowerCase())
        })
        setFilteredPosts(searchedPosts);
        console.log("this is the filtered:", filteredPosts)
    }

    function sendMessage (e) {
        history.push(`/message/${e.target.value}`);
        setSearch("")
    }

    function view (e) {
        history.push(`/posts/${e.target.value}`);
        setSearch("")
    }

    return (
        <div>
            <div id="post-header">
                <h1>Posts</h1>
                <input placeholder="Search Posts" onChange={(e) => searchPosts(e.target.value)}></input>
                <p style={{color: "blue", paddingTop: "17px"}}><Link to='/posts/add'>(ADD POST)</Link></p>
            </div>
        {
            search.length > 1 ? filteredPosts.map((eachPost, idx) => {
                return <div key={idx} className="filteredPost-container" >
                    <p> {eachPost.title} </p>
                    <p> {eachPost.description} </p>
                    <p>Price: {eachPost.price}</p>
                    <p>Seller: {eachPost.author.username}</p>
                    <p>Location: {eachPost.location}</p>
                    {
                    eachPost.author.username !== username ? <button value={eachPost._id} onClick={sendMessage}>SEND MESSAGE</button>
                    : <button value={eachPost._id} onClick={view}>VIEW</button>
                    }
                </div> 
            }): posts ? posts.map((eachPost, idx) => {
                return <div key={idx} className="post-container" >
                    <p> {eachPost.title} </p>
                    <p> {eachPost.description} </p>
                    <p>Price: {eachPost.price}</p>
                    <p>Seller: {eachPost.author.username}</p>
                    <p>Location: {eachPost.location}</p>
                    {
                    eachPost.author.username !== username ? <button value={eachPost._id} onClick={sendMessage}>SEND MESSAGE</button>
                    : <button value={eachPost._id} onClick={view}>VIEW</button>
                    }
                </div>
            }) : <div>No posts</div>
        }
        </div>
    )
}

export default Post