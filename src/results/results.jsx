import React from "react";
import Meanings from "../meanings/meanings";
import '../App.css'

export default function Results({ results, photos }) {
    if (results && results.word) {


        return (
            <div className="results-container">
                <div className="d-flex mb-2 justify-content-center gap-2 flex-wrap">
                    <div className="result-box-word">
                        <div className="box-bg p-3 rounded box-shadow content">
                            <h2 className="text-capitalize">{results.word}</h2>
                            <div className="phonetic fst-italic">{results.phonetic}</div>
                        </div>
                    </div>
                    <div className="box-bg p-2 rounded box-shadow result-box-img">
                        {photos && photos.length > 0 && (
                            <div id="photoCarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {photos.map((photo, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                            <img
                                                src={photo.src.medium}
                                                className="d-block rounded"
                                                alt={photo.alt || "Photo"}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#photoCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon bg-primary rounded-circle p-2
" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#photoCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon bg-primary rounded-circle p-2" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        )}
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