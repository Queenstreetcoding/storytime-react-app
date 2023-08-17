import React, { useState } from "react";
import "./Story.css";

export default function Story(props){
    const [favorite, setFavorite] = useState(null);
    const [sleep, setSleep] = useState(null);
    const [Aenemy, setAenemy] = useState(null);
    const [action, setAction] = useState(null);
    const [kill, setKill] = useState(null);
    const [henemy, setHenemy] = useState(null);
    const [noise, setNoise] = useState(null);
    const [untrap, setUntrap] = useState(null);
    const [habitat, setHabitat] = useState(null);

    let [loaded, setLoaded] = useState(false);
    
    if (loaded) {
    return (
        <div className="Story">
            <p>
                A <strong>lion</strong> was once sleeping in his <strong>den</strong> when a <strong>mouse</strong> started <strong>running up and down his body </strong>  
                just for fun. This woke up the <strong>lion</strong>, and he was quite angry.
                <br />
                <br />
                He was about to <strong>eat</strong> the <strong>mouse</strong> when the <strong>mouse</strong> pleaded with the <strong>lion</strong> to set him free. 
                “I promise you, I will be of great help to you someday if you save me.” The <strong>lion</strong> laughed 
                at the <strong>mouse</strong>’s confidence and let him go.
                <br />
                <br />
                One day, a few <strong>hunters</strong> came into the <strong>forest</strong> and trapped the <strong>lion</strong>. 
                The <strong>lion</strong> started to <strong>roar</strong> and struggled to free himself.
                <br />
                <br />
                Soon, the <strong>mouse</strong> walked past and noticed the <strong>lion</strong> in trouble. He ran and called his 
                friends for help. Together they <strong>gnawed on the ropes</strong> to set the <strong>lion</strong> free. They ran off 
                into <strong>the jungle</strong> and remain friends thereafter.
            </p>
        </div>
    )
} else {
    return "Waiting for your input 👆";
}}