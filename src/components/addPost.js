import React from "react";

const AddPost = ({title, token, baseURL, history, isLoggedIn, setTitle, description, setDescription, price, setPrice, willDeliver, setWillDeliver }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseURL}/posts`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    post: {
                        title: title,
                        description: description,
                        price: `$${price}`,
                        willDeliver: willDeliver
                    }
                })
            })
            console.log(response)
            const data = await response.json();
            console.log('data:', data)
            setTitle("");
            setDescription("");
            setPrice("");
            setWillDeliver(false);
            history.push('/posts')
        } catch (error) {
            console.log(error)
        }
    }
    function handleCheck (e) {
        willDeliver ? setWillDeliver(false) : setWillDeliver(true)
        console.log(e.target.value)
    }

    return(
        <>
            <h1>
                Add New Post
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="TITLE*" value={title} onChange=
                {(e) => setTitle(e.target.value)}></input> 
                <input type="text" placeholder="DESCRIPTION*" value={description} onChange=
                {(e) => setDescription(e.target.value)}></input> 
                <input type="text" placeholder="PRICE*" value={price} onChange=
                {(e) => setPrice(e.target.value)}></input> 
                <label>Willing To Deliver?</label>
                <input type="checkbox" value={willDeliver} onChange=
                {handleCheck}></input> 
                <button type="submit">CREATE</button>
            </form>
        </>
    )
}

export default AddPost;