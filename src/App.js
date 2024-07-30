import './App.css';
import React from 'react';
import Navigation from './Components/Navigation/navigation';
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/rank';
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className="App">
      <ParticlesBg type="thick" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
