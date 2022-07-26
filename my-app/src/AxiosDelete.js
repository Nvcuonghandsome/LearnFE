import { useState } from "react"
import axios from "axios"

function AxiosDelete() {

    const [input, setInput] = useState("")

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const data = {
            id: input
        }

        axios.delete("https://jsonplaceholder.typicode.com/users", data)
            .then(res => {
                console.log(res)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="id"
                value={input}
                onChange={handleChange}
                placeholder="Enter delete id"
            />
            <button type="submit">Delete</button>
        </form>
    )
}

export default AxiosDelete