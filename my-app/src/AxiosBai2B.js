
function AxiosBai2B(props) {
    const { data } = props
    function renderData() {
        if (data.length > 0) {
            return data.map((value, index) => {
                return <li key={index}>
                    <p>ID: {value[id]}</p>
                    <p>Name: {value[name]}</p>
                    <p>Username: {value[username]}</p>
                    <p>Email: {value[email]}</p>
                    <p>Street: {value[address][street]}</p>
                    <p>Suite: {value[address][suite]}</p>
                    <p>Phone: {value[phone]}</p>
                    <p>Website: {value[website]}</p>
                    <p>Company name: {value[company][name]}</p>
                    <p>Company catchPhrase: {value[company][catchPhrase]}</p>
                </li>
            })
        }
    }

    return (
        <div>
            {renderData()}
        </div>
    )
}

export default AxiosBai2B