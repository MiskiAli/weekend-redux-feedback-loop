import React from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { response } from 'express';

function ReviewForm(){
// put useSelectors here 
const feelingList = useSelector (store => store.feelingList);
const understandingForm = useSelector (store => store.understandingForm);
const supportForm = useSelector (store => store.supportForm);
const commentsForm = useSelector (store => store.commentsForm);


const feedback = {
    feelingList,
    understandingForm,
    supportForm,
    commentsForm
}

// handleSubmit / POST goes here
const handleSubmit = (event)=>{
    axios({ method: 'POST', url: '/feedback'})
    .then((response)=>{
        console.log('in the review components post', response)
    }).catch((error)=>{ console.log('error in the review components post', error) })
}

    return(
        <>
        <div>
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