import React, { useState } from "react";
import styles from "./ToDoAdd.module.css";

export default function ToDoAdd ({ setCounter, setArrayList}) {

    // estado de newToDo
    const [ newToDo, setNewToDo ] = useState("");

    function handleInputChange (evento) {
        setNewToDo(
            evento.target.value
        )
    }

    function handleSubmit (evento) {
        evento.preventDefault()

        if (!newToDo) { return ( alert("Ingresa una nueva tarea") ) }
        setArrayList(
            (arrayList) => arrayList = [...arrayList, newToDo]
            )

        setCounter(
            (Counter) => Counter = Counter + 1
        )
        setNewToDo("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className={styles.input} 
                type="text" 
                value={newToDo} 
                placeholder="Nueva Tarea..."
                onChange={handleInputChange}/>

                <br /> 
                <input className={styles.inputBoton} 
                type="submit" value="Agregar" />
            </form>
        </div>
    )
}