
function RenderErrors(props) {
    const { errors } = props

    function render() {
        if (Object.keys(errors).length > 0) {
            return Object.keys(errors).map((key, index) => {
                return (
                    <li style={{ color: "red" }} index={index}>{errors[key]}</li>
                )
            })
        }
    }

    return (
        <ul>
            {
                render()
            }
        </ul>
    )
}

export default RenderErrors