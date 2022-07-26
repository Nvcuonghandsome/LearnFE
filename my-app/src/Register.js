// bài 1
// bài 2 ở LoginMyRegister
import { useState } from "react"
import RenderErrors from "./RenderErrors"

function Register() {

    const selectArr = [
        {
            "id": "",
            "name": "Vui long chon"
        },
        {
            "id": 1,
            "name": "Male"
        },
        {
            "id": 2,
            "name": "Female"
        }
    ]

    const [inputs, setInputs] = useState({
        email: "",
        pass: "",
        sex: ""
    })
    const [errors, setErorrs] = useState({})
    const [file, setFile] = useState('')

    function handleInput(e) {
        const name = e.target.name
        const value = e.target.value
        setInputs(state => (
            { ...state, [name]: value }
        ))
    }

    // Nếu chưa chọn file thì hàm này sẽ ko chạy
    function handleFile(e) {
        // handle file
        if (e.target && e.target.files) {
            const file = e.target.files[0]
            setFile(file)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        let flag = true
        let err = {}
        let data = {}

        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (inputs.email == "") {
            flag = false
            err.email = "Vui long nhap email"
        } else if (!regexEmail.test(inputs.email)) {
            flag = false
            err.email = "Vui lòng nhập đúng định dạng email"
        } else {
            err.email = ""
        }

        if (inputs.pass == "") {
            flag = false
            err.pass = "Vui long nhap password"
        } else {
            err.pass = ""
        }

        if (file == "") {
            flag = false
            err.avatar = "Vui long chon file"
        } else {
            // dấu \ trước kí tự đặc biệt, | là hoặc, $ là chuỗi sẽ ở cuối, i là phân biệt cả hoa và thường
            const allowExtensions = /(\/jpg|\/png|\/jpeg)$/i
            if (!allowExtensions.test(file.type)) {
                flag = false
                err.avatar = "File sai định dạng"
            } else if (file.size > 1024 * 1024) {
                flag = false
                err.avatar = "File vượt quá dung lượng"
            } else {
                err.avatar = ""
            }
        }

        if (inputs.sex == "") {
            flag = false
            err.sex = "Vui long nhap gioi tinh"
        } else {
            err.sex = ""
        }

        if (!flag) {
            setErorrs(state => ({ ...state, ...err }))
        } else {
            // upload to localStorage
            localStorage.setItem("data", JSON.stringify({
                "email": inputs.email,
                "pass": inputs.pass
            }))
            // set error empty
            setErorrs({})
            alert("Bạn đã đăng kí thành công")
        }
    }

    return (
        <>
            <RenderErrors errors={errors} />
            <form onSubmit={handleSubmit} encType="multipart/form-data" >
                <input name="email" onChange={handleInput} placeholder="Enter your email..." />
                <br />
                <input name="pass" onChange={handleInput} type="password" placeholder="Enter your password..." />
                <input name="avatar" onChange={handleFile} type="file" />
                <select name="sex" onChange={handleInput} style={{ backgroundColor: "#fff", width: "200px" }}>
                    {
                        selectArr.map((key, index) => {
                            return (
                                <option key={index} value={key["id"]}>{key["name"]}</option>
                            )
                        })
                    }
                </select>
                <br />
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register