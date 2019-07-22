import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Nosotros from './Nosotros';
import Areas from './Areas';
import Equipo from './Equipo';
import Boletines from './Boletines';
import Contacto from './Contacto';
import Esp from '../lang/Esp.json'
import Eng from '../lang/Eng.json'
library.add(fab)

const dataEsp = Esp
const dataEng = Eng

class App extends Component {
  state = {
    data: dataEsp,
    idioma: "Esp"
  }

  handleChangeIdioma = () => {
    this.state.idioma === "Esp" ?
    this.setState({
      data:dataEng,
      idioma:"Eng"
    }
    )
    :
    this.setState({
      data:dataEsp,
      idioma:"Esp"
    }
    )
  }
  render() { 
    return ( 
      <Router>
        <Navbar handleChangeIdioma={this.handleChangeIdioma} idioma={this.state.idioma} data={this.state.data}/>
        <Route exact path="/" component={() => <Nosotros data={this.state.data}/>}/>
        <Route path="/areas-de-servicio" component={() => <Areas data={this.state.data}/>}/>
        <Route path="/equipo" component={() => <Equipo data={this.state.data}/>}/>
        <Route path="/boletines" component={() => <Boletines data={this.state.data}/>}/>
        <Route path="/contacto" component={() => <Contacto data={this.state.data}/>}/>
      </Router>
     );
  }
}
 
export default App;
