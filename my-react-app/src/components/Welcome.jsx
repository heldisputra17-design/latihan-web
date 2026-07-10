import '../style.css'
const Welcome = (props) => {
    return (
    <div className='card'>
         <h1>Welcome, {props.name}</h1>
         <h1>City: {props.city}</h1>
         <h1>Age: {props.age}</h1>
    </div>
    )
}

export default Welcome
