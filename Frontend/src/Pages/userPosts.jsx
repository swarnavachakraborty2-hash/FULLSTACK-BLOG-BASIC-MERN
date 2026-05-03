import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const UserPosts = () => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()



    useEffect(() => {
        const getUserPosts = async () => {
            axios.get("http://localhost:5000/api/user/user-posts", {
                withCredentials: true
            })
                .then((res) => {
                    setPosts(res.data.userPosts)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getUserPosts()
    }, [])


    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:5000/api/auth/logout", {}, {
                withCredentials: true
            })

            navigate("/") // go back to login/register

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section className='feed-section'>
            <div className="feed-header">
                <h1>My Posts</h1>

                <div style={{ display: "flex", gap: "10px" }}>
                    <button onClick={() => { navigate("/create-post") }} >+ Create</button>
                    <button onClick={() => { navigate("/feed") }}>All Posts</button>
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>

            <div className="grid">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div
                            key={post._id}
                            className='post-card'
                            onClick={() => { navigate(`/feed/${post._id}`) }}
                        >
                            <img src={post.uri} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h2 style={{ textAlign: "center", width: "100%" }}>
                        You haven't created any posts yet
                    </h2>
                )}
            </div>
        </section>
    )
}

export default UserPosts