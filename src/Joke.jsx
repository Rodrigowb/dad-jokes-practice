// Import
import './Joke.css'
import { useState, useEffect } from "react"
import NewJoke from './NewJoke.jsx'

// Function
function Joke(props) {
  // Use state fro jokes
  const [joke, setJoke] = useState("")
  
  // Call API with clicks
  const handleClick = (event) => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Content-Type': 'application.json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => setJoke(response.joke))
  }

  // Call API when renders the page
  useEffect(() => {
    handleClick();
  }, [])

  // Return
  return (
    <div>
      <div className="joke-box">
        <p>{joke}</p>
      </div>
      <NewJoke trigger={handleClick} title={"New Joke"} />
    </div>
  )
}

// Export
export default Joke