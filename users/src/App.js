import Form from "./Components/Form";
import React, { useState } from "react";
import './App.css';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  checked: false
}

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
