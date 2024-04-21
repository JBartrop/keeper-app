import React, {useState} from "react";

function Input(props){

const [message, setinput] = useState({
    title:"",
    content:""
});

const [expanded, setexpanded] = useState(false)

  
function handlechange(event){
    const {name, value} = event.target
    setinput(previnput => {
        if(name === "title"){
            return{
                title : value,
                content: previnput.content
            }
        }else if(name === "content"){
            return{
                title : previnput.title,
                content: value
            }
        }
    })
}


function expand(){
    setexpanded(true);
}

    return(
        <div className="form">
        <form>
            {expanded ? <input 
                name="title" 
                type="text" 
                onChange={handlechange}
                placeholder="title" 
                value={message.title}
            /> : null }
            <textarea 
                name="content"
                onChange={handlechange}
                onClick={expand} 
                placeholder="take your note" 
                value={message.content} 
                rows={expanded ?  "4" : "1" }
            ></textarea>
            <button 
            onClick={(event) => {
                props.handleClick(message);
                event.preventDefault();
                setinput({
                    title:"",
                    content:""
                })
            }} ><span>add</span></button>
        </form>
        </div>
    )
}

export default Input;