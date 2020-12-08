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

 


  render() {
    return (
      <Router>
        <>
          <Header />

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
                />
              );
            }}
            // selectedCategoryFunction = {this.setSelectedUserCategory}
          />
          <Route path="/maze" component={Maze} />
          <Route
            path="/results"
            render={() => {
              return <Results adviceSlip={this.state.adviceSlip} />;
            }}
          />
          <Footer />
        </>
      </Router>
    );
  }
}
export default App;


 // if user selects 'other' wish category, then use the API response from axios within the componentDidMount (which gets random advice)
  // else, trigger a new API call, passing the selected user category in as an argument (which gets specific/related advice)


  // IMPORTANT: need to check with the instructor if user selection can be updated in the child component , setting in the parent and changing in the call. 

  // we need to add "random advice" function if the "selectedCategory" is "other" when calling the other child object Wish.

