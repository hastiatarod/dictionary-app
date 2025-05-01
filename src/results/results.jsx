import React from "react";
import Meanings from "../meanings/meanings";
export default function Results({ results }) {
    if (results) {


        return (
            <div>
                <h2>{results.word}</h2>
                <div>{results.phonetic}</div>
                {results.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <Meanings meaning={meaning} />
                        </div>
                    )
                })}

            </div>
        )
    }
    else {
        return null;
    }
}