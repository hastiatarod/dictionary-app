import React, { useState } from "react"
import './dictionary.css'
export default function Dictionary() {
    const [keyWord, setKeyWord] = useState("");

    function search(event) {
        event.preventDefault();
        console.log(keyWord);

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