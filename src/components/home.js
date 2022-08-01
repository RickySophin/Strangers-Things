import React from "react";

const Home = ({history}) => {

    return (
        <div>
            <h1>Wecome to Stranger's Things!</h1>
            <p></p>
            <button onClick={() => {history.push('/profile')}}>View Profile</button>
        </div>
    )
}

export default Home