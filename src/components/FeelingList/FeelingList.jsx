import axios from 'axios'
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function FeelingList(){
    const [newFeeling, setNewFeeling] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
  // const count = useSelector(store => store.count); 

  // GET feelings
// const getFeelingList = () =>{
//     axios.get('/')
//     .then(response => {
//     dispatch({
//         type: 'GET_FEELING_LIST',
//         payload: response.data
//     })
//     history.push('/UnderstandingForm')
//     console.log(respone.data)
//     }).catch((error)=>{
//     console.log('error in getFeelingList', getFeelingList)
//     })
// }

//   //  useEffect
// useEffect(()=>{
//     getFeelingList();
// }, [])

    const getFeelingList = event => {
    event.preventDefault();
    
        dispatch({
        type: 'GET_FEELING_LIST',
        payload: newFeeling
        });
        history.push('/UnderstandingForm')
        
    }
    

    return(
        <>
        <h3>How are you feeling today?</h3>
        <p>Feeling?</p>
        <form onSubmit={getFeelingList}>
        <input 
        type= "number"
        placeholder="Add here"
        value={newFeeling}
        onChange={event => setNewFeeling(event.target.value)}
        />
        <button type="submit">Next</button>
        </form>
        </>
    )
}

export default FeelingList;