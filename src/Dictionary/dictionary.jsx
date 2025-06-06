import React, { useState } from "react"
import axios from "axios";
import '../App.css'
import Results from "../results/results";
export default function Dictionary(probs) {
    const [keyWord, setKeyWord] = useState(probs.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setloaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        console.log(response);
        setResults(response.data);
    }
    function handlePexelResponse(response) {
        console.log(response);
        setPhotos(response.data.photos)
    }
    function search() {
        let key = 'tb9bafb403447563b62afb93o4d8c0fd'
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${key}`;
        axios.get(apiUrl).then(handleResponse).catch(() => {
            setResults({ error: true })
        });
        let pexelsProxyUrl = `http://localhost:5000/api/photos?query=${keyWord}`;
        axios.get(pexelsProxyUrl).then(handlePexelResponse);

    }
    function handleSubmit(event) {
        event.preventDefault();
        search();

    }

    function updateTheKeyWord(event) {
        setKeyWord(event.target.value);
    }
    function load() {
        setloaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="d-flex flex-column align-items-center mt-5 mb-5" >
                <form className="custom-form mb-4 d-flex w-50" action="" onSubmit={handleSubmit}>
                    <div className="animated-border-wrapper form-control d-flex">
                        <input type="search" placeholder="Search for a word..." onChange={updateTheKeyWord} className="form-control border-0 no-focus-outline" />
                        <button className="custom-form-btn material-symbols-outlined">&#xe8b6;</button>
                    </div>
                </form>
                <Results results={results} photos={photos} />
            </div>
        )
    } else {
        load();
        return ("loading")
    }
}