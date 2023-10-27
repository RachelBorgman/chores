import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { Button } from '@mui/material'

const FindChores = (props) => {
    const {choreList, buttonStyle} = props;

    const [searchItem, setSearchItem] = useState('')
    const [filteredChores, setFilteredChores] = useState(choreList)

    const [searchItemChore, setSearchItemChore] = useState('')
    const [filteredChoresChore, setFilteredChoresChore] = useState(choreList)
    
    const handleInputChange = (e) => { 
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
        const filteredChores = choreList.filter((chore) =>
        chore.choreResponsibility.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredChores(filteredChores);
    }
    const handleInputChangeChore = (e) => { 
        const searchTermChore = e.target.value;
        setSearchItemChore(searchTermChore)
        const filteredChoresChore = choreList.filter((chore) =>
        chore.choreName.toLowerCase().includes(searchTermChore.toLowerCase())
        );
        setFilteredChoresChore(filteredChoresChore);
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
            <h1 style={{color: 'goldenrod'}}>Search</h1>
            <Link to={`/chores/add`}><Button style={buttonStyle}>Add a New Chore</Button></Link>
            <div className='searches'>
                <div className='searchbox'>
                    <h3 style={{color: 'tomato'}}>Search Name to find Chores</h3>
                            <input type="text" value={searchItem} size="30"
                                onChange={handleInputChange}
                                placeholder='Search Name'
                            />
                                {filteredChores.map(chore => <p key={chore.id}>{chore.choreName}</p>)}
                </div>
                <div className='searchbox'>
                    <h3 style={{color: 'tomato'}}>Search Chores to find Responsibility</h3>
                            <input type="text" value={searchItemChore} size="30"
                                onChange={handleInputChangeChore}
                                placeholder='Search Chore Name'
                            />
                                {filteredChoresChore.map(chore => <p key={chore.id}>{chore.choreResponsibility}</p>)}
                </div>
            </div>
        </div>
    );
}

export default FindChores