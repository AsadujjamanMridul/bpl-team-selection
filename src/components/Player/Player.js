import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {

    const {name, role, salary} = props.player;

    return (
        <div className="col-md-6 col-lg-4 my-3">
            <div className="card">
                <img src={props.player.image} className="card-img-top h-25" alt="..."/>
                    <div className="card-body card-bg">
                        <h5 className="card-title player-name">{name}</h5>
                        <p className='card-text player-details'>Role : {role}</p>
                        <p className="card-text player-details">Salary : $ {salary}M / Month</p>
                        <button id="hire-button" onClick={() => props.handleHireBtn(props.player)} className="btn btn-primary hire-btn mt-2 px-3 py-2"><FontAwesomeIcon icon={faPlusCircle} className='mr-2' />Hire Player</button>
                    </div>
            </div>
        </div>
    );
};

export default Player;