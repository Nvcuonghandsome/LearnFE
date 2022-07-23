import { useState } from 'react'

function Toogle() {

    const [isToogle, setToogle] = useState(true)
    function handleClick() {
        setToogle(!isToogle)
    }
    
    return (
        <div>
            <button onClick={handleClick}>
                {isToogle ? 'ON' : 'OFF'}
            </button>
        </div>
    )
}

export default Toogle