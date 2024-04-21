import React, {useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
//import Notes from "../notes";
import Input from "./input";


//before 
// function createCard(card){
//   return(
//     <Note
//     key={card.id}
//     title={card.title}
//     content={card.content}
//      />
//   )
// }
//then became that. you'll figure it out

function App() {

  const [noted, setNote] = useState([]);

  function addNote(message){
    setNote((prevNote) => {
      return[ ...prevNote, message ]
    })
    console.log(noted)
  }

  function remove(id){
    setNote((prevId) => {
      return prevId.filter((item, index) => {
        return index !== id
      })
    })
  }



  return (
    <div className="App">
    <Header />
    <Input handleClick={addNote} />
    {noted.map((toDo, index) => (
      <Note
      id={index}
      key={index}
      title={toDo.title}
      content={toDo.content}
      delete={remove}
       />
    ))}
    <Footer />
    </div>
  );
}

export default App;
