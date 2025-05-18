import React from "react";
import '../App.css'



export default function Meanings({ meaning }) {
    return (
        <div className="box-bg p-3 mb-2 rounded-bottom box-shadow">
            <div className="part-of-speech mb-2">
                {meaning.partOfSpeech}
            </div>
            <div className="definition mb-2 px-2">
                {meaning.definition}
            </div>
            <div className="mb-2 px-2">
                {meaning.synonyms?.join(", ")}</div>

        </div >
    )
}