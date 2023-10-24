import React from 'react';
import './App.css';
import Cars from './Components/cars';
import Hire from './Components/hire';
import "./App.css";

const myStyle={
  backgroundImage: 
"url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  marginTop:'-70px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

function App() {
  return (
    <div style={myStyle}>
      <Cars />
      <Hire />
    </div>
  );
}

export default App;
