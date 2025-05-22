import React from "react";
import Meanings from "../meanings/meanings";
import '../App.css'

export default function Results({ results }) {
    if (results) {


        return (
            <div>
                <div className="box-bg p-3 rounded-top box-shadow">
                    <h2>{results.word}</h2>
                    <div className="phonetic fst-italic">{results.phonetic}</div>
                </div>

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