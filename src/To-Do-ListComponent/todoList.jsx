import {useEffect, useState} from "react";
import styles from "./todo.module.css";

function ToDoList() {

    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem('tasks')) || []
    });
    const [inputValue, setInputValue] = useState("");

    let handleAddTasks = () => {
        if(inputValue.trim() === "") return;
        setTasks(t => [...t, inputValue]);
        setInputValue("");
    }
    useEffect(
        () => {
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    ,[tasks])
    let handleKeyPress = (e) => {
        if(e.key === "Enter"){
            handleAddTasks();
        }
    }
    let handleRemoveTasks = (index) => {
        setTasks(tasks => tasks.filter((_, i) => i !== index))
    }
    let handleClearAllTasks = () => {
        setTasks([])
    }
    let handleMoveTasksUp = (index) => {
        if(index === 0) return;
        setTasks(prevTasks => {
            const newTasks = [...prevTasks];
            [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
            return newTasks;
        })
    }
    let handleMoveTasksDown = (index) => {
        if(index + 1 === tasks.length) return;
        setTasks(prevTasks => {
            const newTasks = [...prevTasks];
            [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
            return newTasks;
        })
    }
    let handleEdit = (e) => {
        e.target.contentEditable = true;
        e.target.focus();
    }
    let handleKeyDownEditable = (e, index) => {
        if(e.key === "Enter") {
            e.preventDefault();
            e.target.contentEditable = false;
            const updatedTask = e.target.textContent.trim();
            if(updatedTask === ""){
                e.target.blur();
                return handleRemoveTasks(index);
            } 
                
        setTasks(prevTasks => {
            const newTasks = [...prevTasks]
            newTasks[index] = updatedTask;
            return newTasks;
        })
        }
    }
    return(
    <>
    <div className={styles.container}>
        <h1>📝 My To-Do List</h1>
        <div className={styles.toDoMainContent}>
            <div className={styles.inputContainer}>
                <div className={styles.inputWrapper}>
                    <input type="text" 
                    name="tasks" 
                    placeholder="Add a new task..."
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    onKeyDown={handleKeyPress}/>
                </div>
                <button onClick={handleAddTasks}>✏️</button>
            </div>
            <div className={styles.clearAll}>
                <button onClick={handleClearAllTasks}>🔄</button>
            </div>
            <div className={styles.toDoList}>
                        {tasks.map((task, index) => (
                        <div key={index} className={styles.toDoItem}>
                            <p 
                               onDoubleClick={handleEdit}
                               onKeyDown={(e) => handleKeyDownEditable(e, index)}
                               suppressContentEditableWarning={true}
                            >{task}</p> 
                            <div className={styles.buttons}>
                            <button onClick={() => handleRemoveTasks(index)}>❌</button>
                            <button onClick={() => handleMoveTasksUp(index)}>🔼</button>
                            <button onClick={() => handleMoveTasksDown(index)}>🔽</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </div>
    </>
    );
}

export default ToDoList;