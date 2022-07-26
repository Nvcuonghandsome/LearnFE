import axios from "axios"
import { useState } from "react"

function AxiosPost() {
    const [input, setInput] = useState("")

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const data = {
            name: input
        }

        axios.post("https://jsonplaceholder.typicode.com/users", data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="username"
                placeholder="Enter username"
                value={input}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AxiosPost