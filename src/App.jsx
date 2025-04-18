import { useState } from "react"
import "./App.css"
import Authenticate from "./Authenticate"
import SignUpForm from "./SignUpForm"

export default function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}
