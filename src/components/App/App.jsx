
import React from 'react';
// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FeelingList from '../FeelingList/FeelingList';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


// components

function App() {

  const feelingList = useSelector (store => store.feelingList);

  // const count = useSelector(store => store.count); 
const dispatch= useDispatch();


// GET feelings
const getFeelingList = () =>{
  axios.get('/feeling')
  .then(response => {
    dispatch({
      type: 'GET_FEELING_LIST',
      payload: response.data
    })
    console.log(respone.data)
  }).catch((error)=>{
    console.log('error in getFeelingList', getFeelingList)
  })
}
//  useEffect
useEffect(()=>{
  getFeelingList();
}, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>

      </header>
      <FeelingList />

    </div>
  );
}

export default App;
