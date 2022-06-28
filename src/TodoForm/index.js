import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        console.log(newTodoValue);
        event.preventDefault();
        if(newTodoValue.length > 0){
            addTodo(newTodoValue);
            setOpenModal(false);
        }
    };

    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Añadir una nueva tarea"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
            >
            Cancelar
          </button>
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
          >
            Añadir
          </button>
        </div>
      </form>
    );
}

export { TodoForm };