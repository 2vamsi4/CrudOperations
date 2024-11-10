import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './components/Form.jsx'
import TableComponent from './components/Display.jsx';
import EditForm from './components/Edit.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<TableComponent />}
          />
          <Route
            path="/add-user"
            element={<UserForm />}
          />
          <Route
            path="/edit"
            element={<EditForm />}
          />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
