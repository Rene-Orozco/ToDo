import React from "react";
import styles from "./ToDoList.module.css";

export default function ToDoList ({arrayList}) {

    return (
        <div>
            <ul>
                {
                arrayList.map( (elemento, index) => (
                    <li key={index}> {elemento} </li>
                ) )
                }
            </ul>
        </div>
    )
}