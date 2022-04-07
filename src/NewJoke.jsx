// Import
import './NewJoke.css'

// Function
function NewJoke(props) {
  // Return
  return (
    <button className="new-joke-button" onClick={props.trigger}>{props.title}</button>
  )
}

// Export
export default NewJoke