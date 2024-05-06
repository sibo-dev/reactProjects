import { useState } from "react"

function App() {
const [toggle, setToggle] = useState(false)

  const handleClick = () => {
      setToggle(!toggle)
  }

  return (
      <button type="button" onClick={handleClick}>
          {toggle ? "ON" : "OFF"}
      </button>
  )
}

export default App