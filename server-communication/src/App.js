
import './App.css';
 import React, { Component } from 'react'
import Tollywood from './Tollywood';
import Bollywood from './Bollywood';
 import Kollywood from './Kollywood';
 export default class App extends Component {
   render() {
     return (
       <div className=''>
         <h2>Tollywod</h2>
         <Tollywood/>
         <h2>Bollywod</h2>
         <Bollywood/>
         <h2>Kollywod</h2>
         <Kollywood/>
       </div>
     )
   }
 }
 
 

