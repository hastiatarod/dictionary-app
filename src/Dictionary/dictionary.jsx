import React, { useState } from "react"
import axios from "axios";
import './dictionary.css'
import Results from "../results/results";
export default function Dictionary() {
    const [keyWord, setKeyWord] = useState("");
    const [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data.word);
        setResults(response.data.word);
    }

    function search(event) {
        event.preventDefault();
        console.log(keyWord);
        let key = 'tb9bafb403447563b62afb93o4d8c0fd'
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${key}`;
        axios.get(apiUrl).then(handleResponse);

    }

    function updateTheKeyWord(event) {
        setKeyWord(event.target.value);
    }

    return (
        <div>
            <form action="" onSubmit={search}>
                <input type="search" placeholder="Search for a word..." onChange={updateTheKeyWord} />
                <button>🔍</button>
            </form>
            <Results results={results} />
        </div>
    )
}