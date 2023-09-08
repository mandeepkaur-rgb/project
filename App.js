import './App.css';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react';
// import { Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';

const App= () => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode enabled", "success");

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled", "success");
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
      
      <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
      {/* <About/> */}
      <Alert/>
        {/* <Routes>
          <Route path="/about" element={<About />}>
          </Route>
<Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}>
         <Route path="/Alert" element={<Alert/>}/>
          </Route>
        </Routes> */}
      </div>
      </>
  );
}
export default App;