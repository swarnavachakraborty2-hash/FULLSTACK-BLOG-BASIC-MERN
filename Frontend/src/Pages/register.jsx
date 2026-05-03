import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {
      await axios.post("http://localhost:5000/api/auth/register", { username, email, password }, { withCredentials: true })
        .then((res) => {
          console.log(res.data)
          navigate("/feed")
        })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="auth-section">
      <div className="auth-card">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>
          <input name='username' type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='enter your username' required />

          <input name='email' type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='enter your email' required />

          <input name='password' type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='enter your password' required />

          <button type="submit">Register</button>
        </form>
        <p className="auth-switch">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </section>
  )
}

export default Register