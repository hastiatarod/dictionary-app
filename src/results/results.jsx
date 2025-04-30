import React from "react";
export default function Results({ results }) {
    if (results) {


        return (
            <div>
                {results}
            </div>
        )
    }
    else {
        return null;
    }
}