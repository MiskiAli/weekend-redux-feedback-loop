import axios from 'axios'
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SupportForm (){

    const [newSupport, setNewSupport] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSupport = event => {
        event.preventDefault();
        
            dispatch({
            type: 'SUPPORT_NUM',
            payload: newSupport
            });
        
            setNewSupport('')
        
        
        if (newSupport === ''){
            history.push('/Support')
        }
        else{
            history.push('/Comments')
        }
    }
const handleBackButton = () => {
    history.push('/Understanding')
}


    return(
        <>
        <h3>How well are you being supported?</h3>

        <form onSubmit={handleSupport}>
        <input 
        type= "number"
        placeholder="Add Here"
        value={newSupport}
        onChange={event => setNewSupport(event.target.value)}
        />
        <button type="submit">Next</button>
        </form>
        <button onClick={handleBackButton} >Back</button>
        </>
    )
    }

export default SupportForm;