import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ProfileForm from './component/ProfileForm';
import Header from './component/Header';
import CandidateList from './component/CandidateList';

export default () => (

  <BrowserRouter>
  <div>
    <Header />
    
<div>
    <Route exact path='/' component = { ProfileForm } />
    <Route path='/list' component = { CandidateList } />
</div>
</div>  
  </BrowserRouter>
)