import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Postcard() {
    const [img, setImg] = useState("")
    const [caption, setCaption] = useState("")
    const [isOwner, setIsOwner] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchpost = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/user/posts/${id}`,
                    { withCredentials: true }
                )

                setImg(res.data.post.uri)
                setCaption(res.data.post.caption)
                setIsOwner(res.data.isOwner)

            } catch (error) {
                console.log(error)
            }
        }

        fetchpost()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.patch(
                `http://localhost:5000/api/user/posts/${id}`,
                { caption },
                { withCredentials: true }
            )

            navigate("/feed")

        } catch (error) {
            console.log(error)
        }
    }

    const deletePost = async () => {
        try {
            await axios.delete(
                `http://localhost:5000/api/user/posts/${id}`,
                { withCredentials: true }
            )

            navigate("/feed")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="edit-container ">
            <button onClick={() => navigate("/feed")}>Back</button>
            <form onSubmit={handleSubmit} className="edit-form">


                <h2
                    style={{
                        fontSize: "26px",
                        fontWeight: "600",
                        color: "#b6b4b4",
                        marginBottom: "20px",
                        borderBottom: "2px solid #979494",
                        paddingBottom: "8px",
                        letterSpacing: "0.5px"
                    }}
                >
                    {isOwner ? "Edit Post :" : "View Post :"}
                </h2>

                <img src={img} alt="" />


                <input
                    type="text"
                    name="caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Edit caption"
                    disabled={!isOwner}
                />


                {isOwner && (
                    <div className="btn-group">
                        <button type="submit">Update</button>
                        <button
                            type="button"
                            className="delete"
                            onClick={deletePost}
                        >
                            Delete
                        </button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Postcard