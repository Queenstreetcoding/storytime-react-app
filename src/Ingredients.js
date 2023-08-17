import React from "react";
import "./Ingredients.css"

export default function Ingredients(){
    return (
        <div className="Ingredients">
            <div className="row">
                <div className="col-6">
            <label for="fav-animal">Your favorite animal:</label>
                <input className="form-control" id="fav-animal" name="fav-animal" type="text" placeholder="Koala" required/>
            <br></br>
            <label for="sleep-animal">Place your favorite animal sleeps:</label>
                <input className="form-control" id="sleep-animal" name="sleep-animal" type="text" placeholder="tree" required/>
            <br></br>
            <label for="enan-animal">Enemy (animal) of your favorite animal:</label>
                <input className="form-control" id="en-animal" name="en-animal" type="text" placeholder="Dingo" required/>
            <br></br>
            <label for="annoying-action">An annoying action:</label>
                <input className="form-control" id="annoying-action" name="annoying-action" type="text" placeholder="poking with a stick" required/>
            <br></br>
            <label for="way-kill">A way to kill:</label>
                <input className="form-control" id="way-kill" name="way-kill" type="text" placeholder="push" required/>
            <br></br>
            </div>
            <div className="col-6">
            <label for="enhu-animal">Enemy (human) of your favorite animal:</label>
                <input className="form-control" id="enhu-animal" name="enhu-animal" type="text" placeholder="lumberjacks" required/>
            <br></br>
            <label for="noise-animal">Noise your favorite animal makes:</label>
                <input className="form-control" id="noise-animal" name="noise-animal" type="text" placeholder="grunt" required/>
            <br></br>
            <label for="enhu-animal">Way to untrap:</label>
                <input className="form-control" id="enhu-animal" name="enhu-animal" type="text" placeholder="cut the ropes" required/>
            <br></br>
            <label for="habitat-animal">Habitat of your favorite animal:</label>
                <input className="form-control" id="habitat-animal" name="habitat-animal" type="text" placeholder="forest" required/>
                <button className="btn btn-outline-secondary">Submit</button>
            <br></br>
            </div>
            </div>
        </div>
    )
}