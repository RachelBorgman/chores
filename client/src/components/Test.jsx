import React from 'react';
import {useState} from 'react'


const Test = (props) => {
    const {choreList} = props;

    const [searchItem, setSearchItem] = useState('')
    const [filteredChores, setFilteredChores] = useState(choreList)
    
    const handleInputChange = (e) => { 
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
        const filteredChores = choreList.filter((chore) =>
        chore.choreResponsibility.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredChores(filteredChores);
    }

    return(
        <div>
            <div className='searchbox'>
                        <input type="text" value={searchItem} size="30"
                            onChange={handleInputChange}
                            placeholder='Search Your Name for Chores'
                        />
                            {filteredChores.map(chore => <p key={chore.id}>{chore.choreName}</p>)}
            </div>
        </div>
    );
}

export default Test