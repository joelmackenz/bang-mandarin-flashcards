//http://ccdb.hemiola.com/

//http://ccdb.hemiola.com/characters/radicals/85?filter=gb&fields=kDefinition,kMandarin 

//filter=gb+simplified (gb characters that are simplified)

import React, {useState, useEffect}  from "react";

function APIDisplay() {
    //This is going to save the information passed into it in our state, as an array.
const [character] = useState("hello");

//This will save info in our state as strings.
const [search, setSearch] = useState('');

//Putting a word in the quotes sets a default.
const [query, setQuery] = useState('chicken');

/*useEffect is a react function. Every time something re-renders on the page, useEffect will execute.
  If I make a second argument to useEffect, I can specify how many renders it should occur for. Eg, if second argument 
  is an empty array, the useEffect will only run on the first render. The second argument can also be a function,
  where useEffect will only run when that function renders. */
  useEffect(() => {
    getCharacter()
  }, []) //[query] will make useEffect run only when query updates. (Ie when search is pressed)
  
const searchWord = "hao"


//the data awaits for the response to be fulfilled, changes it to a json object, then logs it.
const getCharacter = async () => {
    const response = await fetch(`http://ccdb.hemiola.com/characters/radicals/85?filter=${searchWord}`)
    //http://ccdb.hemiola.com/characters/radicals/85?filter=gb&filter=kDefinition,kMandarin
    const data = await response.json();
    //data.hits describes the json response that I requested above, specifically in the "hits" field.
    //setRecipes is defined above. It will set the data.hits to our state.
    console.log(data)
    setSearch(data.hits);
  };
  
  //updateSearch will update the search bar (duh). Needs the event (e) to take the info from input.
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }
  
  //When onSubmit is executed, only then will the query update to our query params
  const getSearch = e => {
    e.preventDefault(); //This will stop the page refresh
    setQuery(search);
    //After the search is complete, setSearch will be set back to an empty string ('')
    setSearch('')
  }


    return(
         <div>
{//             <form onSubmit={getSearch} className="search-form">
//   {/*The value below is what we search for. When it changes (onChange), updateSearch runs*/}
//         <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
//         <button className="search-button" type="submit">
//           Submit
//         </button>
      // </form>
    }
      {/* {character.map(character => (
        //The "key" below is necessary to stop React from alerting -- each element in a map should have its own key, to differentiate them. 
        <Recipe key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}/> */}
      ))
     </div>

    )
}

export default APIDisplay;