import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Counter = () => {
  const [value , setValue] = React.useState(0)

  const add = () => {
    setValue(value + 1)
  }

  const sub = () => {
    setValue (value - 1)
  }

  return(
    <div>
      <button onClick={add}>Add</button>
      <br></br>
      {value}
      <br></br>
      <button onClick={sub}>Sub</button>
    </div>
  )
}

ReactDOM.render(<Counter />,document.querySelector("#root"))

const Room = () => {
  const [isLit , setLit] = React.useState(true)

  return(
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      <p>This is {isLit ? "lit" : "dark "}</p>
      <button onClick={() => setLit(!isLit)}>{isLit ? "dark" : "lit"}</button>
      <p>For Counter please comment this code and uncomment counter code.</p>
    </div>
  )
}

ReactDOM.render(<Room />, document.querySelector("#root"))
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
