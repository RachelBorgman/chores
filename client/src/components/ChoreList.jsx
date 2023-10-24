import React, {useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import DeleteButton from './DeleteButton';
import { Button } from '@mui/material'

const ChoreFinder = (props) => {
    const {setChoreList, choreList, removeFromDom, editStyle, buttonStyle} = props;
    // const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/chores")
            .then((res)=>{
                console.log("THIS IS RES.DATA", res.data);
                // let choresSorted = res.data;
                // choresSorted = choresSorted.sort((a,b) => a.choreName.localeCompare(b.choreName))
                // console.log("this is choresSorted:", choresSorted)
                // setChoreList(choresSorted);
                setChoreList(res.data)
                })
        .catch((err)=>{
            console.log(err.res);
        })
    }, [])

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    <li className="breadcrumb-item"><Link to={`/chores/add`}>Add Chore</Link></li>
                </ol>
            </nav>
            <div className="headerBox">
            <h2 className='dashTitle'> Welcome to your Chore Tracker Dashboard!</h2>
                <Link to={`/chores/add`}><Button style={buttonStyle}>Add a New Chore</Button></Link>
                <div className="table">
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th scope='col'>Chore Name</th>
                                    <th scope='col'>Chore Description</th>
                                    <th scope='col'>Location</th>
                                    <th scope='col'>Posted By:</th>
                                    <th scope='col'>Who is Responsible?</th>
                                    <th scope='col'>Actions Available</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                choreList && choreList.map((chore)=>{
                                return(
                                    <tr key={chore._id}>
                                        <td>{chore.choreName}</td>
                                        <td>{chore.choreDescription}</td>
                                        <td>{chore.choreLocation}</td>
                                        <td className='responsibility'>{chore.chorePostedBy}</td> 
                                        <td className='responsibility'>{chore.choreResponsibility}</td> 
                                        <td>
                                            <Link to={`/chores/${chore._id}`} style={editStyle} >View</Link>
                                            <Link to={`/chores/edit/${chore._id}`} style={editStyle} >Edit</Link>
                                            <DeleteButton choreName={chore.choreName} choreID={chore._id} successCallback={()=> removeFromDom(chore._id)}/>
                                            {/* <button onClick={sortDescending}>Sort</button> */}
                                        </td>
                                    </tr>
                                )})
                            }
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    
    )
}
export default ChoreFinder;