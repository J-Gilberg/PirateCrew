import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from 'axios';

const Main = (props) =>{
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory();
    const [crew, setCrew] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/all')
            .then(res => {
                console.log(res.data);
                setCrew(res.data.results);})
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (sailorId) => {
        axios.delete(`http://localhost:8000/api/pirates/${sailorId}/delete`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setCrew(crew.filter(crew => crew._id !== sailorId));
    }


    return(
        <div>
            <div>
                <h1>Pirate Crew</h1>
                <button onClick={()=>{history.push('/pirate/new')}}>Add Pirate</button>
            </div>
            <div>
                {
                    crew.map((sailor)=>{
                            return(
                                <div>
                                    <img src={sailor.image} alt={`${sailor.name} picture`} className='imgSmall' />
                                    <div>
                                        <h2>{sailor.name}</h2>
                                        <div>
                                            <button onClick={()=>{history.push(`/pirate/${sailor._id}`)}}>View Pirate</button>
                                            <button onClick={()=>handleDelete(sailor._id)}> Walk the Plank</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>

    )

}

export default Main;