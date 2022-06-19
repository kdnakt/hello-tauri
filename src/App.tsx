import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { invoke } from '@tauri-apps/api'

// now we can call our Command!
// Right-click the application background and open the developer tools.
// You will see "Hello, World!" printed in the console!
invoke('greet', { name: 'World' })
  // `invoke` returns a Promise
  .then((response) => console.log(response))

async function onClickButton(name: string) {
  // console.log(1)
  // alert('hello')
  const res = await invoke('greet', { name })
  alert(res)
}


const App = () => {
  const [value, setValue] = useState('Akito')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input value={value} onChange={e => setValue(e.target.value)} ></input>
        <button onClick={() => onClickButton(value)}>
          click me
        </button>
      </header>
    </div>
  );
}

export default App;
