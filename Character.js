import React from "react";


//The properties are props of the object, which are taken from the state of App.js, using useState()
const Character = ({title,calories,image}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=""></img>
        </div>
    );
}

export default Character;