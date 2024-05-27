import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import InProgress from '../InProgress/InProgress';
import ButtonCreator from '../ButtonCreator/ButtonCreator';
import Footer from '../Footer/Footer';
import ButtonCodePopup from '../ButtonCodePopup/ButtonCodePopup';




function App() {
  
  const [ buttonPopup, setButtonPopup ] = useState(false);
  const [ buttonValues, setButtonValues ] = useState({
    title: 'Button',
    className: 'mybutton',
    fontFamily: 'Arial',
    fontSize: 18,
    verticalPadding: 16,
    horizontalPadding: 30,
    borderRadius: 0,
    borderSize: 2,
    textColor: '#000000',
    buttonColor: '#FFFB47',
    borderColor: '#000000',
    shadowColor: '#000000',
    boxShadowX: 0,
    boxShadowY: 0,
    blurRadius: 0,
    spreadRadius: 0,
    type: 'button',
    isBold: true,
    isItalic: false,
  });

  function handleButtonChange(e) {
    const input = e.target;
    const name = input.name;
    const type = input.type;
    if (type === 'checkbox') {
        const isChecked = input.checked;
        setButtonValues({ ...buttonValues, [name]: isChecked });
    } else {
        const value = input.value;
        setButtonValues({ ...buttonValues, [name]: value });
    }
}

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
              values={buttonValues}
              onChange={handleButtonChange}
              onSubmit={openButtonPopup}
              setValues={setButtonValues}
              />
              }/>
          <Route
            path='/create-form'
            element={ 
              <InProgress/>
              }/>
      </Routes>
      <Footer />
      <ButtonCodePopup
      isOpen={buttonPopup}
      onClose={closePopups}
      values={buttonValues}
      />
    </div>
  )
}

export default App
