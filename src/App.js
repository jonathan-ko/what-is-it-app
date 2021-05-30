import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <head>
    //<!-- Load the latest version of TensorFlow.js -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet"></script>
  </head>
  <body>
    <div id="console"></div>
    //<!-- Add an image that we will use to test -->
    <img id="img" crossorigin src="https://i.imgur.com/JlUvsxa.jpg" width="227" height="227"/>
    //<!-- Load index.js after the content of the page -->
    <script src="index.js"></script>
  </body>
    </div>
  );
}
export default App;