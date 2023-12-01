import './App.css'

import Header from './components/Header'
import Books from './components/Books'
import Quotes from './components/Quotes'
import BooksDetails from './components/BooksDetails'

import { Route, Routes } from 'react-router'

function App() {

  return (
    <div className="App">
      <>
      <Header />
      <Routes>
      <Route path="/" element={<Books />}>
      </Route>
      
      <Route path=":id" element={<BooksDetails />} />



        <Route path="/quotes" element={<Quotes />} />

      </Routes>
        </>
    </div>
  )
}

export default App
