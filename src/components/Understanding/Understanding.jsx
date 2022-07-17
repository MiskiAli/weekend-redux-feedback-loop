import axios from 'axios'
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function UnderstandingForm(){
    const [newUnderstanding, setNewUnderstanding] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleUnderstanding = event => {
        event.preventDefault();
        
            dispatch({
            type: 'UNDERSTANDING_NUM',
            payload: newUnderstanding
            });
        
            setNewUnderstanding('')
        
        
        if (newUnderstanding === ''){
            history.push('/understanding')
        }
        else{
            history.push('/support')
        }
    }
const handleBackButton = () => {
    history.push('/')
}
    return(
        <>
        <h3>How well are you being supported?</h3>

<form onSubmit={handleUnderstanding}>
<input 
type= "number"
placeholder="Add Here"
value={newUnderstanding}
onChange={event => setNewUnderstanding(event.target.value)}
/>
<button type="submit">Next</button>
</form>
<button onClick={handleBackButton} >Back</button>
        </>
    )
}
//  come back to edit this page

export default UnderstandingForm;


