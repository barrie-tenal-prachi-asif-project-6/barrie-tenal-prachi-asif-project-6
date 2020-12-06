import { Component } from 'react';
import Zoltar from './components/Zoltar.js';
import Maze from './components/Maze.js';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="wrapper">
            <h1>Barrie Test</h1>
            <h2>More testing</h2>
          </header>
        </div>
        <article className="first-article">
          <p>hello this is an article</p>
        </article>
        <Zoltar />
        <Maze />
      </div>
    );
  }
}

export default App;
