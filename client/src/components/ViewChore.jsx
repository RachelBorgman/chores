import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate, Link} from "react-router-dom";
import { Button } from '@mui/material'
import DoneButton from './DoneButton';

const ViewChore = (props) => {

    const {id} = useParams(); 
    const {buttonStyle} = props;
    const navigate = useNavigate();
    const [oneChore, setOneChore] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/chores/${id}`)
            .then( res => {
                console.log(res.data);
                setOneChore(res.data);
                navigate(`/chores/${id}`)
            })
            .catch( err => console.log(err) );
    }, []);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/chores/${id}`)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {console.log(err)})
    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">View Chore</li>
                    <li className="breadcrumb-item"><Link to={`/dashboard`}>Dashboard</Link></li>
                    <li className="breadcrumb-item"><Link to={`/chores/add`}>Add Chore</Link></li>
                    <li className="breadcrumb-item"><Link to={`/chores/find`}>Search</Link></li>
                </ol>
            </nav>
            <div className='formBox'>
                <h2 className='choreTitle'>{oneChore.choreName}</h2>
                <div className='viewLabel'>
                    <h3 className='viewTitle'>Chore Name:</h3>
                    <p className='choreInfo'>{oneChore.choreName}</p>
                </div>
                <div className='viewLabel'>
                    <h3 className='viewTitle'>Chore Description:</h3>
                    <p className='choreInfo'>{oneChore.choreDescription}</p>
                </div>
                <div className='viewLabel'>
                    <h3 className='viewTitle'>Chore Location: </h3>
                    <p className='choreInfo'>{oneChore.choreLocation}</p>
                </div>
                <div className='viewLabel'>
                    <h3 className='viewTitle'>Posted By: </h3>
                    <p className='choreInfo'>{oneChore.chorePostedBy}</p>
                </div>
                <div className='viewLabel'>
                    <h3 className='viewTitle'>Chore Responsibility: </h3>
                    <p className='choreInfo'>{oneChore.choreResponsibility}</p>
                </div>
                <Link to={`/chores/edit/${oneChore._id}`}><Button style={buttonStyle}>Edit Chore Details</Button></Link>
                {/* <DoneButton choreName={chore.choreName} choreID={chore._id} successCallback={()=> removeFromDom(chore._id)}/> */}
            </div>
        </div>
    );
}
export default ViewChore;