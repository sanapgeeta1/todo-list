import React, { Component } from "react";

function ToDoListItem({ task, deleteTask, toggleCompleted }) {
function handleChange() {
 toggleCompleted(task.id);
 }
 
 return (
 <div CLASSNAME="TODO-ITEM">
 <input
 TYPE="CHECKBOX"
 CHECKED={task.COMPLETED}
 ONCHANGE={handleChange}
 />
<p>{task.text}</p>
<button ONCLICK={() => deleteTask(task.ID)}>
 X
 </button>
 </div>
 );
}


export default ToDoListItem;
