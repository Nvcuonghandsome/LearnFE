
function D(props) {
    const item = props.data
    
    return (
        <div>
            <p>ID: {item.id}</p>
            <p>NAME: {item.name}</p>
            <p>USERNAME: {item.username}</p>
            <p>EMAIL: {item.email}</p>
            <p>ADDRESS: </p>
            <p>Street: {item.address.street}</p>
            <p>Suite: {item.address.suite}</p>
            <p>PHONE: {item.phone}</p>
            <p>WEBSITE: {item.website}</p>
            <p>COMPANY: </p>
            <p>Name: {item.company.name}</p>
            <p>catchPhrase: {item.company.catchPhrase}</p>
        </div>
    )
}

export default D