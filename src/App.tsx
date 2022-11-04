import Comics from './components/comics';
import GlobalStyle from './style/global';
import './App.css'
import React from 'react';

const App: React.FC = () => {

 return (
    <div>
      <Comics />
      <GlobalStyle />
    </div>
  )
}

export default App
