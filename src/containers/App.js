import React from 'react';
import {robots} from '../components/Robots';
import Searchbox from '../components/Searchbox';
import CardList from '../components/CardList';
import './app.css'
import Scroll from '../components/Scroll';
import {GiRobotGolem} from 'react-icons/gi';
import ErrorBoundary from '../components/ErrorBoundary'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      robots:[],
      searchfield:''
    }
  }

  componentDidMount(){
    this.setState({robots:robots});
  }

  onsearchchange=(event)=>{
    this.setState({searchfield:event.target.value});
  }

  render(){
  const filtered=this.state.robots.filter(robots=>{
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  })
  return (
  <body className='tc'>
  <h1><GiRobotGolem/>ROBOARMY<GiRobotGolem/></h1>
  <Searchbox searchchange={this.onsearchchange}/>
  <Scroll>
  <ErrorBoundary>
    <CardList robots={filtered}/>
   </ErrorBoundary> 
  </Scroll>
  </body>
  );
  }
}

export default App;
