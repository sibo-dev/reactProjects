import { useState } from "react"

function App() {
    const [text, setText] = useState("")

    const onChange = ({ target: { value } }) => {
        setText(value)
    }
    return (
        <>
            <input type="text" onChange={onChange} value={text} />
            <p>{text}</p>
        </>
    )
}

export default App