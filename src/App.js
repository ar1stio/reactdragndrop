// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
    const cekstate = {
        tasks: [
            {name:"Learn Angular",category:"plan", bgcolor: "yellow"},
            {name:"React", category:"progress", bgcolor:"pink"},
            {name:"Vue", category:"complete", bgcolor:"skyblue"},
            {name:"Node", category:"complete", bgcolor:"purple"}
          ]
    }
    const [state, setState] = useState(cekstate)
    console.log(state)

    const onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    const onDragOver = (ev) => {
        ev.preventDefault();
    }

    const onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = state.tasks.filter((task) => {
           if (task.name === id) {
               task.category = cat;
           }
           return task;
       });

       setState({
           ...state,
           tasks
       });
    }

        var tasks = {
            wip: [],
            plan: [],
            progress: [],
            qa: [],
            complete: []
        }

    console.log(tasks)


        state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">DRAG & DROP DEMO</h2>
                <div className="plan"
                    onDragOver={(e)=>onDragOver(e)}
                    onDrop={(e)=>{onDrop(e, "plan")}}>
                    <span className="task-header">PLAN</span>
                    {tasks.plan}
                </div>
                <div className="progress"
                    onDragOver={(e)=>onDragOver(e)}
                    onDrop={(e)=>{onDrop(e, "progress")}}>
                    <span className="task-header">PROGRESS</span>
                    {tasks.progress}
                </div>
                <div className="qa"
                    onDragOver={(e)=>onDragOver(e)}
                    onDrop={(e)=>{onDrop(e, "qa")}}>
                    <span className="task-header">QA</span>
                    {tasks.qa}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>onDragOver(e)}
                    onDrop={(e)=>onDrop(e, "complete")}>
                     <span className="task-header">COMPLETED</span>
                     {tasks.complete}
                </div>


            </div>
        );
}

export default App;
