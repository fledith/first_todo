import { useState } from "react";

function ToDoForm({addTask}) {
    const [ userInput, setUserInput ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    }

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
          handleSubmit(e);
      }
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input
                value = {userInput}
                type = "text"
                onChange = {handleChange}
                onKeyDown = {handleKeyPress}
                placeholder = 'Write the task...'/>
            <button>Save</button>
        </form>
    )
}

export default ToDoForm