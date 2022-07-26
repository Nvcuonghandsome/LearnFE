import { useState } from "react"
import RenderErrors from "./RenderErrors"

function Validate2() {
    const [inputs, setInputs] = useState({})
    const [errors, setErrors] = useState({})

    function handleInput(e) {
        const nameInput = e.target.name
        const value = e.target.value
        // truyền biến nameInput vào nên phải dùng []
        setInputs(state => ({ ...state, [nameInput]: value }))
    }

    function handleSubmit(e) {
        console.log("Check inputs: ", inputs)
        e.preventDefault()
        let flag = true
        let errorSubmit = {}
        if (inputs.email == undefined) {
            flag = false
            errorSubmit.email = "Vui long nhap email"
        }

        if (inputs.pass == undefined) {
            flag = false
            errorSubmit.pass = "Vui long nhap password"
        }

        if (!flag) {
            setErrors(errorSubmit)
        } else {
            setErrors({})
        }
    }

    return (
        <div>
            <RenderErrors errors={errors} />

            <form onSubmit={handleSubmit} >
                <input
                    name="email"
                    onChange={handleInput}
                    placeholder="Enter your email..."
                />
                <br />
                <input
                    type="password"
                    name="pass"
                    onChange={handleInput}
                    placeholder="Enter your password..."
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default Validate2