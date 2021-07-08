import React, { useState, useEffect } from "react";
import Character from "./Character";
import "./character-search.css";

function APIDisplay() {
    const [searchResults, setSearchResults] = useState([]);

    const [search, setSearch] = useState("");

    const [query, setQuery] = useState("hao");

    const getCharacter = async () => {
        const response = await fetch(
            `http://ccdb.hemiola.com/characters/mandarin/${query}?filter=gb&fields=string,kHanyuPinyin,kDefinition,kMandarin,kFrequency`
        );
        const data = await response.json();
        if (data[1]) {
            console.log(data);
            setSearchResults(data);
            console.log(data[1].string);
        } else {
            setSearchResults([]);
        }
    };

    useEffect(() => {
        getCharacter();
    });

    //Update search allows for a string to be entered into the search box.
    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault(); //This stops the page refresh
        //When the form is submitted, the query changes to the search.
        setQuery(search);
        setSearch("");
    };

    let display;
    if (searchResults.length >= 1) {
        //before these are displayed, they should be listed by kFrequency
        display = searchResults
            .sort(function (a, b) {
                if (a.kFrequency === null) {
                    a.kFrequency = 6;
                }
                return a.kFrequency - b.kFrequency;
            })
            .map((entry) => (
                <Character
                    key={entry.string}
                    character={entry.string}
                    definition={entry.kDefinition}
                    pronounce={entry.kHanyuPinyin}
                    frequency={entry.kFrequency}
                />
            ));
    } else {
        display = <p>No results found.</p>;
    }

    return (
        <div>
            <h2>Character Search</h2>
            <div className="results-box">
                <form onSubmit={getSearch} className="search-form">
                    <input
                        className="search-bar"
                        type="text"
                        value={search ? search : 'Enter a word, eg. "hao"'}
                        onChange={updateSearch}
                    />
                    <button type="submit">Submit</button>
                </form>
                <h1>Search results are ordered from common to uncommon.</h1>
                <h1>Your search results for "{query}":</h1>
                {display}
            </div>
        </div>
    );
}

export default APIDisplay;
