import { useState } from 'react'
import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'
import MyComponent from './components/MyComponent'
import Event from './components/Event'

function App() {

  return (
      <div className="App">
        <h1>Fundamentos</h1>
        <FirstComponent />
        <TemplateExpression />
        <MyComponent />
        <Event />
      </div>
  )
}

export default App
