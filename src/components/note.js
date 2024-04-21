import React from "react";


function note(props){
    return(
        <div className="note" key={props.id}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button 
            onClick={() => {
                props.delete(props.id)
            }}><span>delete</span></button>
        </div>
    )
}

export default note;