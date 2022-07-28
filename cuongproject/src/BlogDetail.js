import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function BlogDetail() {

    const params = useParams()

    useEffect(() => {
        axios.get("http://localhost/laravel/laravel/public/api/blog/detail/" + params.id)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>Blog detail</div>
    )
}

export default BlogDetail