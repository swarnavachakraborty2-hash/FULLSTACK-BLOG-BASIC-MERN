import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Postcard() {
    const [caption,setCaption] = useState("")
    const {id} = useParams()//returns object of key value pairs of the dynamic parameters in the url and we can access the value of the parameter using the key which is the name of the parameter in the route
    const navigate = useNavigate()
    console.log(id)


    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.patch(`http://localhost:5000/posts/${id}`, {caption})// caption sould be send as an object because the backend API is expecting an object with the key as caption and value as the new caption to update the post caption
            .then((res) => {
                console.log(res.data)
            })
        navigate("/feed")
    }

    const deletePost = async () => {
        await axios.delete(`http://localhost:5000/posts/${id}`)
        .then((res)=>{console.log(res.data)});
        navigate("/feed")
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>       
                <input type="text" name='caption' value={caption} onChange={(e)=>setCaption(e.target.value)} placeholder='Edit caption' />
                <button type='submit'>update</button><button type = "button"onClick={deletePost}>Delete</button>
            </form>
            <button onClick={() => { navigate("/feed") }}>see all posts</button>
        </div>

    )
}

export default Postcard