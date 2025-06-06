import React from "react";
import Meanings from "../meanings/meanings";
import '../App.css'

export default function Results({ results, photos }) {
    if (results && results.word) {


        return (
            <div >
                <div className="d-flex mb-2">
                    <div className="">
                        <div className="box-bg p-3 rounded box-shadow">
                            <h2 className="text-capitalize">{results.word}</h2>
                            <div className="phonetic fst-italic">{results.phonetic}</div>
                        </div>
                    </div>
                    <div className="box-bg p-3 rounded box-shadow">

                        {photos.photos[0]}


                    </div>
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
    else if (results && results.message) {
        return <div className="text-danger mt-4">Sorry, no definitions found. Please try another word.</div>;
    } else {
        return null;
    }
}