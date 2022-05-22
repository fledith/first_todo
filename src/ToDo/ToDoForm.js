import { useCallback, useState } from 'react';

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('');

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    },[addTask, userInput]);

    const handleChange = useCallback ((e) => {
        setUserInput(e.currentTarget.value)
    }, []);

    const handleKeyPress = useCallback ((e) => {
      if (e.key === 'Enter') {
          handleSubmit(e);
      }
    }, [handleSubmit]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='Write the task...'
            />
            <button>Save</button>
        </form>
    )
}

export default ToDoForm;