import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const DeleteButton = (props) => {
    const { choreName, choreID, successCallback } = props;
    // console.log("this is the choreName: ", choreName)
    function showAlert(choreName){
        alert(`Are you sure you want to delete ${choreName}`)
    }
    const navigate = useNavigate();
    const deleteChore = e => {
        showAlert(choreName)
        axios.delete('http://localhost:8000/api/chores/' + choreID)
            .then(res=>{
                successCallback();
                navigate("/dashboard");
            })
    }
    return (
        <button onClick={deleteChore}>
            Delete
        </button>
    )
}
export default DeleteButton;