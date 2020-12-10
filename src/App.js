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

  // Function to call the API which will give us specific advice when user selects a specific category besides 'other'
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

  // Function to call the API which will give us random advice when user selects 'other' category
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

  // Function to update the userName state with the user's inputted name
  updateName = (recievedUserName) => {
    this.setState({
      userName: recievedUserName
    })
  }

  // Function to reset the adviceSlip array to an empty array when the user clicks on the the 'make another wish' button (this ensures that, when the user is routed back to the instructions/home page, the coin button used to progress from home to the maze is no longer rendered until the user resubmits the form)
  emptyAdvice =()=>{
    this.setState({
      adviceSlip: []
    })
  }

  render() {
    window.onbeforeunload = (e) => {
      e.preventDefault();
      window.location.href("https://barrie-tenal-prachi-asif-project-6.github.io/barrie-tenal-prachi-asif-project-6");
    };
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <>
          <Header />
          <main>
            <Route 
              exact path="/" 
              component={Zoltar} 
            />
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
            />
            <Route 
              path="/maze" 
              component={Maze} 
            />
            <Route
              path="/results"
              render={() => {
                return <Results 
                adviceSlip={this.state.adviceSlip}
                userName={this.state.userName} 
                emptyAdvice={this.emptyAdvice}
                getRandomAdvice={this.getRandomAdvice}
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