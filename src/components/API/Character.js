import React from "react";


//The properties are props of the object, which are taken from the state of App.js, using useState()
const Character = ({character, definition, pronounce}) => {
    let display;
    if (definition === null){
        display = <p>{character}({pronounce}): No definition found.</p>
    }else{
        display = <p>{character}({pronounce}): {definition}</p>
    }

    return(
        <div>
            <p>
                {display}
            </p>
        </div>
    );
}

export default Character;