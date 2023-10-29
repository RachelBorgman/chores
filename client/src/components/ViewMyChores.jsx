import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { Button } from '@mui/material'

const MyChores = (props) => {
    const {choreList, buttonStyle, name} = props;

    const [personsChores, setPersonsChores] = useState(choreList)
    const neededName = name.toString();

    const handleFilter = () => { 
        const personsChores = choreList.filter((chore) =>
        
        chore.choreResponsibility.toLowerCase().includes(neededName)
        );
        setPersonsChores(personsChores);
    }

    const filteredButton = {
        backgroundColor: '#FAA0A0',
        color: 'white',
        margin: '30px'
    }

    const hOneStyle = {
        color:'goldenrod',
        textTransform: 'capitalize'
    }

    return(
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={`/dashboard`}>Dashboard</Link></li>
                    <li className="breadcrumb-item"><Link to={`/chores/add`}>Add Chore</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Search</li>
                </ol>
            </nav>
            <Link to={`/chores/add`}><Button style={buttonStyle}>Add a Chore</Button></Link>
            <div className='mainContainer'>
                <h1 style={hOneStyle}>{name}'s Chores</h1>
                <div className='container'>
                    <h2 style={{color: 'tomato'}}>Click to Display</h2>
                            <Button onClick={handleFilter} style={filteredButton}>{name}'s Chores</Button>
                                {personsChores.map(chore => <h3  style={{color: 'teal'}} key={chore.id}>{chore.choreName} - {chore.choreLocation}</h3>)}
                </div>
            </div>
        </div>
    );
}

export default MyChores