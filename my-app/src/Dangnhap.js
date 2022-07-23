import { useState } from "react"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

function Dangnhap() {
    const [isToggle, setIsToggle] = useState(false)
    function handleClick() {
        setIsToggle(!isToggle)
    }

    return (
        <div>
            {isToggle ? <LogoutButton onClick={handleClick} />
                : <LoginButton onClick={handleClick} />
            }
        </div>
    )
}

export default Dangnhap