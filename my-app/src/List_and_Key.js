function Lists(props) {
    const numbers = props.numbers
    return (
        <ul>
            {
                numbers.map((number, index) => {
                    return (
                        <li key={number.toString()}>{number}</li>
                    )
                })
            }
        </ul>
    )
}

export default Lists