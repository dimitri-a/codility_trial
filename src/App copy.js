import React from 'react';
import logo from './logo.svg';
import './App.css';


let str ="1,2,3,3,3,4,5,1,4,3,5,2"

function counter(str){
  let mapper = str.split(',').reduce(
    
    (op,inp)=>{
    op.set(inp, (op.get(inp) || 0 ) + 1)
    return op
  },new Map()
  
  )

  console.log('Mapper',mapper)
  
  return [...mapper]
         .sort((a,b)=>a[0]-b[0])  // if you need in always in ascending order
         .map(([key,value])=>`${key}(${value})`)
         .join(',')
}



function App() {

  console.log(counter(str))
  //console.log(counter("1,2,3,2,3,43,4,53,5,3"))



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
