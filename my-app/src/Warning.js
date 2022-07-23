import { useState } from "react"

function DisplayWarning(props) {
    if (!props.warning) {
        return null
    }

    return (
        <div>
            Warning !
        </div>
    )
}

export default function Warning() {
    const [isWarning, setIsWarning] = useState(true)
    function Toogle() {
        setIsWarning(!isWarning)
    }

    return (
        <div>
            <DisplayWarning warning={isWarning}>
            </DisplayWarning>
            <button onClick={Toogle}>
                {isWarning ? "Hide" : "Show"}
            </button>
        </div>
    )
}