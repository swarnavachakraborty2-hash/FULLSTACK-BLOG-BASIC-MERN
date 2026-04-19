import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Postcard() {
    const [img, setImg] = useState("")
    const [caption, setCaption] = useState("")
    const { id } = useParams()//returns object of key value pairs of the dynamic parameters in the url and we can access the value of the parameter using the key which is the name of the parameter in the route
    const navigate = useNavigate()
    console.log(id)

    useEffect(() => {//cant use async in useffect so use async inside a function
        const fetchpost = async () => {
            axios.get(`http://localhost:5000/posts/${id}`)
                .then((res) => {
                    console.log(res.data.message);
                    setImg(res.data.post.image)
                    setCaption(res.data.post.caption)
                })
        }
        fetchpost()
    }, [id])


    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.patch(`http://localhost:5000/posts/${id}`, { caption })// caption sould be send as an object because the backend API is expecting an object with the key as caption and value as the new caption to update the post caption
            .then((res) => {
                console.log(res.data)
            })
        navigate("/feed")
    }

    const deletePost = async () => {
        await axios.delete(`http://localhost:5000/posts/${id}`)
            .then((res) => { console.log(res.data) });
        navigate("/feed")
    }


    return (
        <div className="edit-container">
            <form onSubmit={handleSubmit} className="edit-form">
                <h2>Edit Post</h2>

                <img src={img} alt="" />

                <input
                    type="text"
                    name="caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Edit caption"
                />

                <div className="btn-group">
                    <button type="submit">Update</button>
                    <button type="button" className="delete" onClick={deletePost}>
                        Delete
                    </button>
                </div>
            </form>

            <button onClick={() => navigate("/feed")}>Back</button>
        </div>
    )
}

export default Postcard