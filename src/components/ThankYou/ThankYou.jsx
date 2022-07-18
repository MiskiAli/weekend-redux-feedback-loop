import React from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ThankYou(){

    const history = useHistory();

    const handleBackButton = () => {
        history.push('/') // goes back to feeling page
    }

    return(
<>
<h3>Thank you for your submission!</h3>
<h4>Would you like to leave another feedback?</h4>
<button onClick={handleBackButton} >New Feedback</button>
</>
    )
}

export default ThankYou;