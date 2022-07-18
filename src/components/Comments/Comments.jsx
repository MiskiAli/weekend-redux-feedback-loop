import axios from 'axios'
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CommentsForm(){

    const [newComments, setNewComments] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleComments = event => {
        event.preventDefault();
        
            dispatch({
            type: 'COMMENTS_NUM',
            payload: newComments
            });
        
            setNewComments('')
        
        
      
            history.push('/review') 
        
    }
const handleBackButton = () => {
    history.push('/support')
}

    return(
        <>
<h3>Any comments?</h3>

<form onSubmit={handleComments}>
<input 
type= "text"
placeholder="Add Here"
value={newComments}
onChange={event => setNewComments(event.target.value)}
/>
<button type="submit">Next</button>
</form>
<button onClick={handleBackButton} >Back</button>
        </>
    )
}

export default CommentsForm;