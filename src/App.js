import { Component } from 'react';
import Zoltar from './components/Zoltar.js';
import Maze from './components/Maze.js';
import './styles/App.scss';
import Axios from 'axios';

class App extends Component {

  render() {
    return (
      <div>
        <Zoltar />
        <Maze />
      </div>
    )
  }
}
export default App;


