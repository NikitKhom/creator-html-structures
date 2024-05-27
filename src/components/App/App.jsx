import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import InProgress from '../InProgress/InProgress';
import ButtonCreator from '../ButtonCreator/ButtonCreator';
import Footer from '../Footer/Footer';
import CodePopup from '../CodePopup/CodePopup';




function App() {
  
  const [ buttonPopup, setButtonPopup ] = useState(false);

  function openButtonPopup() {
    setButtonPopup(true);
  }

  function closePopups() {
    setButtonPopup(false);
  }

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
              <ButtonCreator
              onSubmit={openButtonPopup}
              />
              }/>
          <Route
            path='/create-form'
            element={ 
              <InProgress/>
              }/>
      </Routes>
      <Footer />
      <CodePopup
      isOpen={buttonPopup}
      onClose={closePopups}
      html={`<a class="btn href="#"></a>`}
      css={`
      .btn {
        color: black;
        text-decoration: none;
        border: 1px solid black;
        background-color: white;
      }
      `}
      />
    </div>
  )
}

export default App
