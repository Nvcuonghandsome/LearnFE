import { useState } from "react"
import RenderErrors from "./RenderErrors"

function LoginMyRegister() {
    let data = localStorage.getItem("data")
    if (data) {
        data = JSON.parse(data)
    }

    const [inputs, setInputs] = useState({})
    const [errors, setErorrs] = useState({})

    function handleInput(e) {
        const name = e.target.name
        const value = e.target.value
        setInputs(state => ({ ...state, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        const err = {}
        let flag = true

        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!inputs.email) {
            flag = false
            err.email = "Vui long nhap email"
        } else if (!regexEmail.test(inputs.email)) {
            flag = false
            err.email = "Email sai định dạng"
        } else {
            err.email = ""
        }

        if (!inputs.pass) {
            flag = false
            err.pass = "Vui long nhap mat khau"
        } else {
            err.pass = ""
        }

        if (!flag) {
            setErorrs(err)
        } else {
            let check = true
            if (inputs.email !== data.email) {
                check = false
                err.email = "Email không đúng"
            } else {
                err.email = ""
            }

            if (inputs.pass !== data.pass) {
                check = false
                err.pass = "Mật khẩu không đúng"
            }

            if (!check) {
                setErorrs(err)
            } else {
                setErorrs({})
                alert("Chúc mừng! Bạn đã đăng nhập thành công")
            }
        }

    }

    return (
        <>
            {<RenderErrors errors={errors} />}
            <form onSubmit={handleSubmit} >
                <input name="email" placeholder="Your email..." onChange={handleInput} />
                <br />
                <input name="pass" type="password" placeholder="Your password" onChange={handleInput} />
                <br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default LoginMyRegister