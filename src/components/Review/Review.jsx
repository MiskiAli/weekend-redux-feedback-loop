import React from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { response } from 'express';

function ReviewForm(){
// put useSelectors here 
const feelingList = useSelector (store => store.feelingList);
const understandingForm = useSelector (store => store.understandingReducer);
const supportForm = useSelector (store => store.supportReducer);
const commentsForm = useSelector (store => store.commentsReducer);
const history = useHistory();


// handleSubmit / POST goes here
const handleSubmit = (event)=>{
    event.preventDefault(); //this makes the button do the thing
    axios({ method: 'POST', url: '/feedback'})
    .then((response)=>{
        console.log('in the review components post', response)
        // history.push('/thankyou')

    }).catch((error)=>{ console.log('error in the review components post', error) })
    // history.push('/thankyou')
        history.push('/thankyou')
    
}

    return(
        <>
        <div>
            <h3>Review</h3>
            <h4>Feeling: {feelingList}</h4>
            <h4> Understanding: {understandingForm}</h4>
            <h4>Support: {supportForm}</h4>
            <h4>Comment: {commentsForm}</h4>
        </div>

        <div onSubmit={handleSubmit}>
            <button>Submit</button>
        </div>
        </>
    )
}

export default ReviewForm;