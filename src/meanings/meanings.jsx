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
        </div>
    )
}