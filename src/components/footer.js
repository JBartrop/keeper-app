import React from "react";

let date = new Date();
let currentYear = date.getFullYear();
console.log(date)

function footer(){
    return(
        <footer>
            <p>copyright {currentYear}</p>
        </footer>
    )
}

export default footer;