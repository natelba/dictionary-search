import React from "react";
import "./Phonetics.css";

export default function Phonetics (props) {
    return (
        <div className="Phonetics">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
               Listen 🔉
            </a>
            <span className="Text">{props.phonetic.text}</span>
        </div>
    )
}

// try to get api react audio button