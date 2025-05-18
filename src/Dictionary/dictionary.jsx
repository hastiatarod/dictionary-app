import React, { useState } from "react"
import axios from "axios";
import './dictionary.css'
import Results from "../results/results";
export default function Dictionary() {
    const [keyWord, setKeyWord] = useState("");
    const [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault();
        let key = 'tb9bafb403447563b62afb93o4d8c0fd'
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${key}`;
        axios.get(apiUrl).then(handleResponse);

    }

    function updateTheKeyWord(event) {
        setKeyWord(event.target.value);
    }

    return (
        <div className="d-flex flex-column align-items-center mt-5 mb-5" >
            <form action="" onSubmit={search}>
                <input type="search" placeholder="Search for a word..." onChange={updateTheKeyWord} />
                <button >🔍</button>
            </form>
            <Results results={results} />
        </div>
    )
}