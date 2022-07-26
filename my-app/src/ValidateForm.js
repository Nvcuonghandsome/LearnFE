import { useState } from "react"

function Validate1() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [errEmail, setErrEmail] = useState('')
    const [errPass, setErrPass] = useState('')

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePass(e) {
        setPass(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (email === '') {
            setErrEmail('Vui long nhap email')
        } else {
            setErrEmail('')
        }

        if (pass === '') {
            setErrPass('Vui long nhap password')
        } else {
            setErrPass('')
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <input value={email} onChange={handleEmail} placeholder="Your email..." />
            <p style={{ color: "red" }}>{errEmail}</p>
            <input type="password" value={pass} onChange={handlePass} placeholder="Your password..." />
            <p style={{ color: "red" }}>{errPass}</p>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Validate1