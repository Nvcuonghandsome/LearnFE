import axios from "axios"
import { useEffect, useState } from "react"
import AxiosBai2B from "./AxiosBai2B"
function AxiosBai2A() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setData(res.data[5])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <AxiosBai2B data={data} />
    )
}

export default AxiosBai2A