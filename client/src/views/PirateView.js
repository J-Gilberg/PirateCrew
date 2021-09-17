import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import axios from 'axios';

const PirateView = (props) => {
    const [sailor, setSailor] = useState({});
    const [pegLeg, setPegLeg] = useState(false);
    const [eyePatch, setEyePatch] = useState(false);
    const [hookHand, setHookHand] = useState(false);
    const history = useHistory();
    const { _id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${_id}`)
            .then(res => {
                setSailor(res.data.results);
                setPegLeg(res.data.results.pegLeg);
                setEyePatch(res.data.results.eyePatch);
                setHookHand(res.data.results.hookHand);
                console.log(res.data.results)
            
            })
            .catch(err => console.log(err))
    }, [])


    const changePegLeg = (change) => {
        axios.patch(`http://localhost:8000/api/pirates/${_id}/edit`, {pegLeg: change} )
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setPegLeg(change);
    }

    const changeHookHand = (change) => {
        axios.patch(`http://localhost:8000/api/pirates/${_id}/edit`, {hookHand: change} )
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setHookHand(change);
    }

    const changEyePatch = (change) => {
        axios.patch(`http://localhost:8000/api/pirates/${_id}/edit`, {eyePatch: change} )
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setEyePatch(change);
    }

    return (
        <div>
            <div>
            <h1>{sailor.name}</h1>
            <button onClick={()=>history.push('/pirates')}>Crew Board</button>
            </div>
            <div>
                <div>
                    <img src={sailor.image} alt={`${sailor.name} picture`} className='imgLarge'/>
                    <h1>{sailor.catchPhrase}</h1>
                </div>
                <div>
                    <h2>About</h2>
                    <ul>
                        <li>Position:   {sailor.crewPosition}</li>
                        <li>Treasures:   {sailor.numChests}</li>
                        <li>Peg Leg:   {pegLeg ? 'Yes' : 'No'} <button name="" onClick={()=>changePegLeg(pegLeg? false : true)}>{pegLeg ? 'No' : 'Yes'}</button></li>
                        <li>Eye Patch:   {eyePatch ? 'Yes' : 'No'} <button onClick={()=>changEyePatch(eyePatch? false : true)}>{eyePatch ? 'No' : 'Yes'}</button></li>
                        <li>Hook Hand:   {hookHand ? 'Yes' : 'No'} <button onClick={()=>changeHookHand(hookHand? false : true)}>{hookHand ? 'No' : 'Yes'}</button></li>
                    </ul>
                </div>
            </div>
        </div>

    )

}

export default PirateView;