// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import InProgress from '../InProgress/InProgress';
import ButtonCreator from '../ButtonCreator/ButtonCreator';
// import FormCreator from '../FormCreator/FormCreator';
import Footer from '../Footer/Footer';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      <Routes>
          <Route
            path='/'
            element={ 
              <Main/>
              }/>
          <Route
            path='/create-input'
            element={ 
              <InProgress/>
              }/>
          <Route
            path='/create-button'
            element={ 
              <ButtonCreator/>
              }/>
          <Route
            path='/create-form'
            element={ 
              <InProgress/>
              }/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
