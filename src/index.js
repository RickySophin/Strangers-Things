import React , { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch, useHistory, useParams} from "react-router-dom";

import { Post, Header, Home, Profile, AddPost, Register, Login, SinglePost, Message } from "./components";

const baseURL = "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b"
const App = () => {
    const [posts, setPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [token, setToken] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const [search, setSearch] = useState('');
    const [filteredPosts, setFilteredPosts] = useState('');
    const [message, setMessage] = useState('');
    const [myData, setMyData] = useState([]);
    let history = useHistory();

    // useEffect (() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await fetch(`${baseURL}/posts`);
    //             const postsJ = await response.json();
    //             console.log("got posts: ", postsJ);
    //             setPosts(postsJ.data.posts);
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     };
    //     fetchPosts();
    // }, []);

    // useEffect (() => {
    //     const isThereToken = localStorage.getItem("token");
    //     if (isThereToken.length > 1) {
    //         setIsLoggedIn(true)
    //     } else {
    //         setIsLoggedIn(false)
    //     }
    // }, []);

    return (
        <>
            <Header setToken={setToken} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setusername={setusername} setpassword={setpassword}/>
            <Switch>
                <Route exact path="/">
                    <Home history={history}/>
                </Route>
                <Route exact path="/posts">
                    <Post username={username} history={history} filteredPosts={filteredPosts} setFilteredPosts={setFilteredPosts} baseURL={baseURL} setPosts={setPosts} posts={posts} search={search} setSearch={setSearch}/>
                </Route>
                <Route path="/posts/add">
                    <AddPost title={title} token={token} baseURL={baseURL} history={history} isLoggedIn={isLoggedIn} setTitle={setTitle} description={description} setDescription={setDescription}
                    price={price} setPrice={setPrice} willDeliver={willDeliver} setWillDeliver={setWillDeliver}/>
                </Route>
                <Route path="/posts/:id">
                    <SinglePost username={username} message={message} setMessage={setMessage} history={history} baseURL={baseURL} useParams={useParams} posts={posts} token={token}/>
                </Route>
                <Route path="/message/:id">
                    <Message history={history} posts={posts} token={token} message={message} setMessage={setMessage} baseURL={baseURL} useParams={useParams}/>
                </Route>
                <Route path="/profile">
                    <Profile myData={myData} setMyData={setMyData} baseURL={baseURL} token={token} username={username} isLoggedIn={isLoggedIn}/>
                </Route>
                <Route path="/register">
                    <Register baseURL={baseURL} username={username} setusername={setusername} setpassword={setpassword} 
                    password={password} token={token} setToken={setToken} history={history} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </Route>
                <Route path="/login">
                    <Login baseURL={baseURL} username={username} setusername={setusername} setpassword={setpassword} 
                    password={password} token={token} setToken={setToken} history={history} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </Route>
            </Switch>
        </>
    )
}

const appElement = document.getElementById("app");
ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    appElement);
