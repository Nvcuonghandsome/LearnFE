import { useState } from "react"

// function Form() {
//     const [state, setState] = useState("demo1")

//     const handleChange = (e) => {
//         setState(e.target.value.toUpperCase())
//     }

//     const handleSubmit = (e) => {
//         alert('Name: ' + state)
//         e.preventDefault()
//     }

//     return (
//         <form onSubmit={handleSubmit} >
//             {/* <label for="name">
//                 Name:
//                 <input id="name" value={state} onChange={handleChange} />
//             </label> */}
//             <select value={state} onChange={handleChange} >
//                 <option value="demo1" >demo1</option>
//                 <option value="demo2" >demo2</option>
//                 <option value="demo3" >demo3</option>
//                 <option value="demo4" >demo4</option>
//             </select>
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

// multiple input
function Form() {
    const [isGoing, setIsGoing] = useState(true)
    const [guest, setGuest] = useState(2)

    function renderList(e) {
        const target = e.target

        if (target.type === 'checkbox') {
            setIsGoing(target.checked)
        } else {
            setGuest(target.value)
        }
    }

    function handleSubmit(e) {
        alert('is going: ' + isGoing + " guest: " + guest)
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                is going
                <input
                    name="isGoing"
                    type="checkbox"
                    value={isGoing}
                    onChange={renderList}
                />
            </label>
            <p></p>
            <label>
                is guest
                <input
                    name="guest"
                    type="number"
                    value={guest}
                    onChange={renderList}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form