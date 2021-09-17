import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from 'axios';


const PirateNew = (props) => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [numChests, setNumChests] = useState('');
    const [catchPhrase, setCatchPhrase] = useState('');
    const [hookHand, setHookHand] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [pegLeg, setPegLeg] = useState(true);
    const [crewPosition, setCrewPosition] = useState('');

    const history = useHistory();
    const [error, setError] = useState({});

    const [thereBeACaptain, setThereBeACaptain] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(crewPosition);
        if (crewPosition === 'Captain') {
            console.log("captain validation")
            axios.post('http://localhost:8000/api/pirates/captain', { crewPosition: crewPosition })
                .then(res => {
                    console.log("results");
                    console.log(res.data);
                    if (res.data.results !== null) {
                        console.log("captain found")
                        setThereBeACaptain(true);
                    } else {
                        console.log("We have a new Captain")
                        setThereBeACaptain(false);
                        axios.post('http://localhost:8000/api/pirates/new', {
                            name: name
                            , image: image
                            , numChests: numChests
                            , catchPhrase: catchPhrase
                            , hookHand: hookHand
                            , eyePatch: eyePatch
                            , pegLeg: pegLeg
                            , crewPosition: crewPosition
                        })
                            .then(res => {
                                console.log("results here");
                                console.log(res.data);
                                if (res.data.results) {
                                    history.push('/pirates');
                                } else {
                                    console.log(res.data.err.errors)
                                    setError(res.data.err.errors);
                                }
                            })
                            .catch(err => console.log(err.data))
                    }
                })
                .catch(err => console.log(err.data))
        } else {
            setThereBeACaptain(false);
            console.log("saving sailor, no captain contest")
            axios.post('http://localhost:8000/api/pirates/new', {
                name: name
                , image: image
                , numChests: numChests
                , catchPhrase: catchPhrase
                , hookHand: hookHand
                , eyePatch: eyePatch
                , pegLeg: pegLeg
                , crewPosition: crewPosition
            })
                .then(res => {
                    console.log("results");
                    console.log(res.data);
                    if (res.data.results) {
                        history.push('/pirates');
                    } else {
                        console.log(res.data.err.errors)
                        setError(res.data.err.errors);
                    }
                })
                .catch(err => console.log(err.data))
        }
    }


    return (
        <div>
            <div>
                <h1>Add Sailor</h1>
                <button onClick={() => history.push('/pirates')}>Crew Board</button>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <span>{error.name && error.name.message}</span><span>{!error.name && name.length < 2 && name.length >= 1 && 'Name must be at least two characters long'}</span><br />
                    <label htmlFor="name">Pirate Name:</label><br />
                    <input name="name" type="text" onChange={(e) => setName(e.target.value)} value={name} /><br />

                    <span>{error.image && error.image.message}</span><br />
                    <label htmlFor="image">Image Url:</label><br />
                    <input name="image" type="text" onChange={(e) => setImage(e.target.value)} value={image} /><br />

                    <span>{error.numChests && error.numChests.message}</span><br />
                    <label htmlFor="numChests"># of Treasure Chests:</label><br />
                    <input name="numChests" type="number" onChange={(e) => setNumChests(e.target.value)} value={numChests} /><br />

                    <span>{error.catchPhrase && error.catchPhrase.message}</span><span>{!error.catchPhrase && catchPhrase.length < 2 && catchPhrase.length >= 1 && 'Catch Phrase must be at least three characters long'}</span><br />
                    <label htmlFor="catchPhrase">Pirate Catch Phrase:</label><br />
                    <input name="catchPhrase" type="text" onChange={(e) => setCatchPhrase(e.target.value)} value={catchPhrase} /><br />
                </div>
                <div>
                    <span>{error.crewPosition && error.crewPosition.message}</span><br />
                    <span>{thereBeACaptain && "There Can Only Be One Captain!!!"}</span><br />
                    <label htmlFor="crewPosition">Crew Position:</label><br />
                    <select name="crewPosition" type="text" onChange={(e) => setCrewPosition(e.target.value)} value={crewPosition}>
                        <option >Select One</option>
                        <option value="Captain">Captain</option>
                        <option value="FirstMate">First Mate</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="PowderMonkey">Powder Monkey</option>
                    </select><br />
                    <span>{error.pegLeg && error.pegLeg.message}</span><br />
                    <label htmlFor="pegLeg">Peg Leg:</label>
                    <input name="pegLeg" type="checkbox" onChange={(e) => setPegLeg(e.target.checked)} checked={pegLeg} /><br />

                    <span>{error.eyePatch && error.eyePatch.message}</span><br />
                    <label htmlFor="eyePatch">Eye Patch:</label>
                    <input name="eyePatch" type="checkbox" onChange={(e) => setEyePatch(e.target.checked)} checked={eyePatch} /><br />

                    <span>{error.hookHand && error.hookHand.message}</span><br />
                    <label htmlFor="hookHand">Hook Hand:</label>
                    <input name="hookHand" type="checkbox" onChange={(e) => setHookHand(e.target.checked)} checked={hookHand} /><br />
                    <input type="submit" value="Add Pirate" />
                </div>
            </form>
        </div>

    )

}

export default PirateNew;