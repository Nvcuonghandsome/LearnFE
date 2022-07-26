
import axios from 'axios'
import { useEffect, useState } from 'react'

function AxiosGet() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log("check res:", res)
                setData(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    function renderData() {
        if (data.length > 0) {
            return data.map((value, index) => {
                return <li key={index}>
                    <p>{value.id}</p>
                    <p>{value.name}</p>
                </li>
            })
        }
    }

    return (
        <ul>
            {renderData(data)}
        </ul>
    )
}

export default AxiosGet