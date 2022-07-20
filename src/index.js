import React , { useEffect, useState }from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import { PostList, Header } from "./components";

const baseURL = "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b"
const App = () => {
    const [posts, setPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({})

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

    return (
        <>
            <main>

            </main>
            <div>
                <Header />
            <p>dfsfds</p>
                <PostList posts={posts}/>
            </div>
        </>
    )
}

const appElement = document.getElementById("app");
ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    appElement);
