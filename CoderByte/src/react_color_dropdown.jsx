import { useState } from "react"

function App() {
    const colors = { red: "Red", blue: "Blue", green: "Green" }
    const [color, setColor] = useState(colors.red)
    const onChange = e => setColor(e.target.value)
    return (
        <>
            <select onChange={onChange} value={color}>
                <option value={colors.red}>{colors.red}</option>
                <option value={colors.blue}>{colors.blue}</option>
                <option value={colors.green}>{colors.green}</option>
            </select>
            {color && <p>{`You have selected: ${color}`}</p>}
        </>
    )
}

export default App