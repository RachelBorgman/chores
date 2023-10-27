import React, { useState, useEffect } from 'react'
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ChoreList from '../components/ChoreList';
import AddChoreForm from '../components/AddChoreForm';
import ViewChore from '../components/ViewChore';
import UpdateChore from '../components/UpdateChore';
import Welcome from '../components/Welcome';
import Test from '../components/Test';
import FindChores from '../components/FindChores';


function Main() {

    const [choreList, setChoreList] = useState([]);
    const [errors, setErrors] = useState({})

    const linkStyle = {
        margin: "1rem",
        fontSize: '1.5em',
        textDecoration: 'underline',
        color: 'teal',
    };

    const editStyle = {
        margin:'1rem',
        color: 'teal'
    };

    const buttonStyle = {
        backgroundColor: 'teal',
        color: 'white',
        margin: '10px'
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
        <BrowserRouter>
            <Routes>
                <Route element={<Welcome/>}  path="/"/>
                <Route element={<ChoreList buttonStyle={buttonStyle} choreList={choreList} editStyle={editStyle} setChoreList={setChoreList}  removeFromDom={removeFromDom}/>} path="/dashboard" default />
                <Route element={<AddChoreForm   buttonStyle={buttonStyle} initialChoreName="" initialChoreDescription=""  initialChoreLocation=""  initialChorePostedBy="" initialChoreResponsibility="" linkStyle={linkStyle} editStyle={editStyle} choreList={choreList} setChoreList={setChoreList} setErrors={setErrors} errors={errors}/>} path="/chores/add" />
                <Route element={<ViewChore  buttonStyle={buttonStyle}/>} path="/chores/:id" />
                <Route element={<FindChores   buttonStyle={buttonStyle}  choreList={choreList} />} path="/chores/find" />
                <Route element={<UpdateChore   buttonStyle={buttonStyle} choreList={choreList} linkStyle={linkStyle} editStyle={editStyle} setChoreList={setChoreList}  removeFromDom={removeFromDom} initialChoreName="" initialChoreDescription=""  initialChoreLocation="" initialChorePostedBy="" initialChoreResponsibility=""/>} path="/chores/edit/:id" />
            </Routes>
        </BrowserRouter>
        <div className='footerCredit'>Image by <a href="https://www.freepik.com/free-vector/abstract-watercolor-background_16389961.htm#query=background%20color&position=40&from_view=keyword&track=ais">Freepik</a></div>
    </div>
    )
}

export default Main;