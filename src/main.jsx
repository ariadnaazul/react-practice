import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactComponents from './components/ReactComponents.jsx'
import Props from './components/Props.jsx'
import JSXSintaxis from './components/JSXSintaxis.jsx'
import EventsAndStates from './components/EventsAndStates.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ReactComponents/>
    <Props subject="Vamos a ver Props" saludo="Hola, Ariadna"/>
    <JSXSintaxis/>
    <EventsAndStates/>
  </React.StrictMode>,
)

