import React, { useState, useEffect } from 'react'
// import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../App.css';
import {Routes, Route} from 'react-router-dom';
import ChoreList from '../components/ChoreList';
// import AddChoreForm from '../components/AddChoreForm';
// import ViewChore from '../components/ViewChore';
// import UpdateChore from '../components/UpdateChore';


function Dashboard() {

    const [choreList, setChoreList] = useState([]);
    const [errors, setErrors] = useState({})

    // const linkStyle = {
    //     margin: "1rem",
    //     fontSize: '1.5em',
    //     textDecoration: 'underline',
    //     color: 'blue',
    // };

    const editStyle = {
        margin:'1rem',
        color: 'goldenrod'
    };

    useEffect(() => {
        axios.get('http://localhost:8000/api/chores')
            .then(res => {
                setChoreList(res.data)
            })
            .catch((err)=>console.log(err))
        }, [])

    const removeFromDom = choreID => {
        axios.delete("http://localhost:8000/api/chores/" + choreID)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            const newChoreList = choreList.filter((chore) => chore._id !== choreID)
            setChoreList(newChoreList);
        })
        .catch((err)=>console.log(err))
    }

    return (
    <div>
        <h1 style={{color:'goldenrod'}} >Chore Tracker</h1>
        {/* <BrowserRouter> */}
            { <Routes>
                <Route element={<ChoreList choreList={choreList} editStyle={editStyle} setChoreList={setChoreList}  removeFromDom={removeFromDom}/>} path="/dashboard" default />
                {/* <Route element={<AddChoreForm initialChoreName="" initialChoreDescription=""  initialChoreLocation=""  initialChorePostedBy="" initialChoreResponsibility="" linkStyle={linkStyle} editStyle={editStyle} choreList={choreList} setChoreList={setChoreList} setErrors={setErrors} errors={errors}/>} path="/chores/add" /> */}
                {/* <Route element={<ViewChore  linkStyle={linkStyle}/>} path="/chores/:id" /> */}
                {/* <Route element={<UpdateChore  choreList={choreList} linkStyle={linkStyle} editStyle={editStyle} setChoreList={setChoreList}  removeFromDom={removeFromDom} initialChoreName="" initialChoreDescription=""  initialChoreLocation="" initialChorePostedBy="" initialChoreResponsibility=""/>} path="/chores/edit/:id" /> */}
            </Routes> }
        {/* </BrowserRouter> */}
    </div>
    )
}

export default Dashboard;