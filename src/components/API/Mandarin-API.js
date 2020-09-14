//http://ccdb.hemiola.com/

//http://ccdb.hemiola.com/characters/radicals/85?filter=gb&fields=kDefinition,kMandarin 

//filter=gb+simplified (gb characters that are simplified)

import React, {useState, useEffect}  from "react";
import Character from "./Character";

function APIDisplay() {
const [searchedWord, setSearchedWord] = useState([]);

const [search, setSearch] = useState('');

const [query, setQuery] = useState('hao');

/*useEffect is a react function. Every time something re-renders on the page, useEffect will execute.
  If I make a second argument to useEffect, I can specify how many renders it should occur for. Eg, if second argument 
  is an empty array, the useEffect will only run on the first render. The second argument can also be a function,
  where useEffect will only run when that function renders. */
  useEffect(() => {
    getCharacter()
  }, [query]) //[query] will make useEffect run only when query updates. (Ie when search is pressed)


//the data awaits for the response to be fulfilled, changes it to a json object, then logs it.
const getCharacter = async () => {
    const response = await fetch(`http://ccdb.hemiola.com/characters/mandarin/${query}?filter=gb&fields=string,kDefinition,kMandarin`)
    //http://ccdb.hemiola.com/characters/radicals/85?filter=gb&filter=kDefinition,kMandarin
    const data = await response.json();
    console.log(data)
    
    setSearchedWord(data);
    console.log(data[1].string)
  };
  
  //updateSearch will update the search bar. Needs the event (e) to take the info from input.
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  
  const getSearch = e => {
    e.preventDefault(); //This will stop the page refresh
    setQuery(search);
    setSearch('')
  }

    return(
         <div>
             <form onSubmit={getSearch} className="search-form">
              {/*The value below is what we search for. When it changes (onChange), updateSearch runs*/}
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">
                Submit
                </button>
            </form>
      <h1>Your search results for "{query}":</h1>
      {searchedWord.map(entry => (
        //The "key" below is necessary to stop React from alerting -- each element in a map should have its own key, to differentiate them. 
        <Character 
          key={entry.string}
          character={entry.string}
          definition={entry.kDefinition}
          pronounce={entry.kMandarin}/>
      ))}
     </div>

    )
}

export default APIDisplay;