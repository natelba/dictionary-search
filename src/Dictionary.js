import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);

    }

    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleDictionResponse);

        let pexelsApiKey = "563492ad6f91700001000001cc735d3ccf1e4206b2ef425ac7e93321";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }


    function handleKeyword(event){
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
      return (
        <div className="Dictionary">
            <section>
                <h1>Look up a word</h1>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeyword} autoFocus={true} defaultValue={props.defaultKeyword} />
                </form>
                <div className="hint">
                    <p>suggested keywords: sunset, wine, yoga..</p>
                </div>
            </section>
            <Results results={results}/>
            <Photos photos={photos} />
        </div>
       );  
    } else {
        load();
        return "Loading...";
    }
    
}