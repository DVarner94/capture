import React from 'react';
// global style
import GlobalStyle from './components/GlobalStyle'
//import pages
import AboutUs from './pages/AboutUs';
import AboutSection from './components/AboutSection';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
