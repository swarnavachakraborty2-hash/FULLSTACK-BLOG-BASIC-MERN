import React from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"


const CreatePost = () => {

  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    //multer is used to read thius formdata
    const formData = new FormData(e.target)//creates an object of all the datas in form elements with key(name attribute) and value(value attrubute) of the form.used to send formdata to backend api

    await axios.post("http://localhost:5000/create-post", formData)
      .then((res) => {
        console.log(res.data);
        navigate("/feed")
      })
      .catch((err) => {
        console.log(err)
        alert("Error creating post")
      })
  }

  return (
    <section className='create-post-section'>
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit} className="form">
        <input type="file" name="image" accept="image/*" />
        <input type="text" name='caption' placeholder='Enter caption' required />
        <button type='submit'>Upload</button>
      </form>

      <button className="secondary" onClick={() => navigate("/feed")}>
        View Feed
      </button>
    </section>
  )
}

export default CreatePost