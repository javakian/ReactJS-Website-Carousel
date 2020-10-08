import React from 'react';
import Button from 'react-bootstrap/Button';

import MainCarousel from '../components/MainCarousel';

class Home extends React.Component {

  render() {
  return (
    <div className="App">
      <MainCarousel /><br /><br />
       Queer Enough.<br /><br />
       10% of proceeds go to the Trevor Project.<br /><br />
       <hr />
       <small>© 2020 <a href="http://gabriellealexa.com">Gabrielle Alexa</a></small><br /><br />

    </div>
  );
}
}

export default Home;