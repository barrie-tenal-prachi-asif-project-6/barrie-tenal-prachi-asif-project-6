import { Component } from 'react';
import Header from './components/Header.js'
import Zoltar from './components/Zoltar.js';
import Maze from './components/Maze.js';
import Results from './components/Results.js';
import Instructions from './components/Instructions.js';
import Footer from './components/Footer.js';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.scss';


class App extends Component {
  constructor() {
    super();
    this.state = {
      adviceSlip: [],
      userName: "",
    };
  }

  // Function to call API which will give us specific advice when user selects a specific category besides 'other'
  getSpecificAdvice = (recivedSelectedCategory) => {
    axios({
      url: `https://api.adviceslip.com/advice/search/${recivedSelectedCategory}`,
      method: "GET",
      responseType: "JSON",
    }).then((res) => {
      this.setState({
        adviceSlip: res.data.slips,
      });
    });
  };

  // Function to call API which will give us random advice when user selects category of 'other'
  getRandomAdvice = () => {
    axios({
      url: `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`,
      method: "GET",
      responseType: "json",
    }).then((res) => {
      const newAdvice = [];
      newAdvice.push(res.data.slip);

      this.setState({
        adviceSlip: newAdvice,
      });
    });
  };

  // updateName()
  updateName = (recievedUserName) => {
    this.setState({
      userName: recievedUserName
    }, console.log(this.state.userName))
  }

  render() {
    return (
      <Router>
        <>
          <Header />
          <main>
            <Route exact path="/" component={Zoltar} />
            {/* Passing the function to call the specific selected category to the child  */}
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <Instructions
                    getSpecificAdvice={this.getSpecificAdvice}
                    getRandomAdvice={this.getRandomAdvice}
                    adviceSlip={this.state.adviceSlip}
                    updateName={this.updateName}
                  />
                );
              }}
              // selectedCategoryFunction = {this.setSelectedUserCategory}
            />
            <Route path="/maze" component={Maze} />
            <Route
              path="/results"
              render={() => {
                return <Results 
                adviceSlip={this.state.adviceSlip}
                userName={this.state.userName} 
                />;
              }}
            />
          </main>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;