import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { exportDefaultSpecifier } from "@babel/types";

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function onlyUnique(value, index, self) {
  //console.log("value",value);
  //console.log("self.indexOf(value)",self.indexOf(value));

  return self.indexOf(value) === index;
}

let solution = function(A) {
  //sort integers

  //let N = A.sort(sortNumber);

  //filter unique

  let unique = A.filter(onlyUnique);

  //console.log(unique);

  let N = unique.sort((a, b) => a - b);

  //console.log('N',N)
  //return N;

  //find largest missing integer

  for (let i = 0; i < N.length; i++) {
    //debugger;
   // console.log("N[i]", N[i]);
    //console.log("N[i+1]", N[i + 1]);
    if (N[i + 1] !== N[i] + 1 && N[i] + 1 > 0) {
      //console.log("N[i]+1", N[i] + 1);

      return N[i] + 1;
    }
    if (!N[i + 1]) {
      return 1;
    }
  }
};

function App() {
  //return 5
  console.log('solution=',solution([1, 3, 6, 4, 1, 2]));

  //[1, 2, 3] sjpuld retirn 4
  console.log('solution=',solution([1, 2, 3]));

  //[-1, -3] should retur 1
  console.log("solution=", solution([-1, -3]));

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
