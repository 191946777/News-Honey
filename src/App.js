import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<News key='trading' category='trading'/>}>
            </Route>
            <Route path="/general" element={<News key='general' category='general'/>}>
            </Route>
            <Route path="/crypto" element={<News key='crypto' category='crypto'/>}>
            </Route>
            <Route path="/business" element={<News key='business' category='business'/>}>
            </Route>
            <Route path="/sports" element={<News key='sports' category='sports'/>}>
            </Route>
            <Route path="/esports" element={<News key='eports' category='esports'/>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}



