
import React from 'react';
// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// components
import FeelingList from '../FeelingList/FeelingList';
import UnderstandingForm from '../Understanding/Understanding';
import SupportForm from '../Support/Support';
import CommentsForm from '../Comments/Comments'
import ReviewForm from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';
function App() {

// // GET feelings
// const getFeelingList = () =>{
//   axios.get('/')
//   .then(response => {
//     dispatch({
//       type: 'GET_FEELING_LIST',
//       payload: response.data
//     })
//     console.log(respone.data)
//   }).catch((error)=>{
//     console.log('error in getFeelingList', getFeelingList)
//   })
// }


  return (
    
<Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      
      <Route exact path='/'>
      <FeelingList />
      </Route>
      
      <Route exact path='/understanding'>
      <UnderstandingForm />
      </Route>

      <Route exact path='/support'>
      <SupportForm />
    </Route>

    <Route exact path='/comments'>
      <CommentsForm />
    </Route>

    <Route exact path='/review'>
      <ReviewForm />
    </Route>

    <Route exact path='/thankyou'>
      <ThankYou />
    </Route>
    
    </div>
</Router>

  );
}

export default App;
