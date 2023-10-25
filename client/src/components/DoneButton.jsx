import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const DoneButton = (props) => {
    const { choreName, choreID, successCallback } = props;
    // console.log("this is the choreName: ", choreName)
    function showAlert(choreName){
        alert(`Are you sure you finsihed ${choreName}`)
    }
    const navigate = useNavigate();
    const finishChore = e => {
        showAlert(choreName)
        axios.delete('http://localhost:8000/api/chores/' + choreID)
            .then(res=>{
                successCallback();
                navigate("/dashboard");
            })
    }
    return (
        <button onClick={finishChore}>
            Done
        </button>
    )
}
export default DoneButton;