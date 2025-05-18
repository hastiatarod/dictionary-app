import React from "react";


export default function Meanings({ meaning }) {
    return (
        <div>
            <div>
                {meaning.partOfSpeech}
            </div>
            <div>
                {meaning.definition}
            </div>
            <div className="mb-2">
                {meaning.synonyms?.join(", ")}</div>

        </div >
    )
}