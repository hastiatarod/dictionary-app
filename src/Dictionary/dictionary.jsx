import React, { useState } from "react"
import axios from "axios";
import './dictionary.css'
export default function Dictionary() {
    const [keyWord, setKeyWord] = useState("");

    function handleResponse(response) {
        console.log(response);
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
        </div>
    )
}