function Example(props){
    return(
        <div className="box">
            <h1>My name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
        </div>
    )
}
export default Example