import Header from '../Header/Header';
import './app.css';
import React from 'react';
import Stend from '../stend/stend';
import Games from '../games/games';
import Inform from '../Inform/inform';
import Inform2 from '../Inform2/inform2'
import Footer from '../footer/footer';
import { render } from '@testing-library/react';
//import Carousel from '../carousel/carousel';
const App=()=>{

  return (
<div>
  <Header/>
  <Stend/>
  {/* <Carousel/>  */}
  <Games/>
  <Inform/>
<Inform2/>
  <Footer/>

</div>
  )
}

export default App;