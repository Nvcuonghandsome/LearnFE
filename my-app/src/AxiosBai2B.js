
function AxiosBai2B(props) {
    const { data } = props
    return (
        <div>
            <p>ID: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Username: {data.username}</p>
            <p>Email: {data.email}</p>
            {/* <p>Street: {data.address.street}</p> */}
            {/* <p>Suite: {data.address.suite}</p> */}
            <p>Phone: {data.phone}</p>
            <p>Website: {data.website}</p>
            {/* <p>Company name: {data.company.name}</p> */}
            {/* <p>Company catchPhrase: {data.company.catchPhrase}</p> */}
        </div>
    )
}

export default AxiosBai2B