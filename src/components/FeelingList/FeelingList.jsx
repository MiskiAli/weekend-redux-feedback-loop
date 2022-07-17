import axios from 'axios'
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function FeelingList(){
    const [newFeeling, setNewFeeling] = useState('');

    // const feelingList = useSelector (store => store.feelingList);
    
    const dispatch = useDispatch();
    
    const handleSubmit = event => {
    event.preventDefault();
    
        dispatch({
        type: 'ADD_FEELING',
        payload: newFeeling
        });
    
        setNewFeeling('')
    }
        

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input 
        type= "text"
        placeholder="Rate Your Feeling"
        value={newFeeling}
        onChange={event => setNewFeeling(event.target.value)}
        />
        <button type="submit">Next</button>
        </form>
        </>
    )
}

export default FeelingList;