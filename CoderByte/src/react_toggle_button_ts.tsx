import { useState, ReactNode } from "react"
import React from "react"

const App: ReactNode = () => {
    const [toggle, setToggle] = useState<boolean>(true)

    const onClick = () => {
        setToggle(!toggle)
    }

    return <button onClick={onClick}>{toggle ? "ON" : "OFF"}</button>
}

export default App