import axios from "axios"
import { useEffect, useState } from "react"


function AxiosBai1() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log("check res", res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function renderData() {
        if (data.length > 0) {
            return data.map((item, index) => {
                return <li key={index}>
                    <p>ID: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Street: {item.address.street}</p>
                    <p>Phone: {item.phone}</p>
                    <p>Company: {item.company.name}</p>
                </li>
            })
        }
    }

    return (
        <ul>
            {renderData()}
        </ul>
    )
}

export default AxiosBai1