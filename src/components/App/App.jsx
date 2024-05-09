// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import InputCreator from '../InputCreator/InputCreator';
import ButtonCreator from '../ButtonCreator/ButtonCreator';
import FormCreator from '../FormCreator/FormCreator';



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
              <InputCreator/>
              }/>
          <Route
            path='/create-button'
            element={ 
              <ButtonCreator/>
              }/>
          <Route
            path='/create-form'
            element={ 
              <FormCreator/>
              }/>
      </Routes>
    </div>
  )
}

export default App
