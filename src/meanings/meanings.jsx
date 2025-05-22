import React from "react";
import '../App.css'



export default function Meanings({ meaning }) {
    return (
        <div className="box-bg p-3 mb-2 rounded-bottom box-shadow">
            <div className="part-of-speech mb-2">
                {meaning.partOfSpeech}
            </div>
            <div className="definition mb-3 px-2">
                {meaning.definition}
            </div>
            <div className="mb-2 px-2">
                {meaning.synonyms?.map((synonym, index) => (
                    <span key={index}
                        className="custom-synooym px-2 py-1 mb-1 me-1 d-inline-block">
                        {synonym}
                    </span>
                )

                )}</div>

        </div >
    )
}