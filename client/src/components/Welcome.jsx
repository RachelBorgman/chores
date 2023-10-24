import React, {useEffect} from 'react'
// import axios from 'axios';
import { Link } from "react-router-dom";
// import DeleteButton from './DeleteButton';
import { Button } from '@mui/material'

const Welcome = (props) => {

    const buttonStyle = {
        backgroundColor: 'teal',
        color: 'white'
    };

    return(
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                    <li className="breadcrumb-item"><Link to={`/dashboard`}>Dashboard</Link></li>
                    <li className="breadcrumb-item"><Link to={`/chores/add`}>Add Chore</Link></li>
                </ol>
            </nav>
            <br></br>
            <div>
                <h1 style={{color:'rgba(255, 99, 71, 0.5'}} >Welcome to Chore Tracker</h1>
                <br></br>
                <Link to={`/dashboard`}><Button style={buttonStyle}>DASHBOARD</Button></Link>
            </div>
            <br></br>
        </div>
    );
}

export default Welcome