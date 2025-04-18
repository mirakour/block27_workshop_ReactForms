import { useState } from "react"

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)

  async function handleClick() {
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      const result = await response.json()
      setSuccessMessage(result.message)
      setUser(result.data)
      setError(null)
    } catch (error) {
      setError(error.message)
      setSuccessMessage(null)
      setUser(null)
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {user && <p>Welcome, {user.username}!</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  )
}