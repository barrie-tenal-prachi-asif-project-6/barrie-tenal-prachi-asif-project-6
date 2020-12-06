import { Component } from 'react';
import Header from './components/Header.js'
import Zoltar from './components/Zoltar.js';
import Maze from './components/Maze.js';
import Axios from 'axios';
import './styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomAdviceSlip: [],
      specificAdviceSlip: [],
      selectedUserCategory: "",
    };
  }

  componentDidMount() {
    Axios({
      url: 'https://api.adviceslip.com/advice',
      method: 'GET',
      responseType: 'json'
    })
      .then((res) => {
        console.log(res.data.slip);
        const newAdvice = []
        newAdvice.push(res.data.slip)
        this.setState({
          randomAdviceSlip: newAdvice
        })
        console.log(this.state.randomAdviceSlip);
      })
  }


  handleSubmit = (selectedUserCategory) => {
    // if user selects 'other' wish category, then use the API response from axios within the componentDidMount (which gets random advice)
    // else, trigger a new API call, passing the selected user category in as an argument (which gets specific/related advice)
    if (selectedUserCategory === 'other') {
      // componentdidmount
    } else {
      Axios({
        url: `https://api.adviceslip.com/advice/${selectedUserCategory}`,
        method: "GET",
        responseType: "json",
      }).then((res) => {
        console.log(res.data.slip);
        const newAdvice = [];
        newAdvice.push(res.data.slip);
        this.setState({
          specificAdviceSlip: newAdvice,
        });
        console.log(this.state.randomAdviceSlip);
      });
    }
  }


  render() {
    return (
      <>
        {/* <button onClick={this.state.randomAdviceSlip}>BUTTON HERE</button> */}
        {this.state.randomAdviceSlip.map((receivedObj) => {
          return(
            <p key={receivedObj.id}>{receivedObj.advice}</p>
          )
        })}
        <Header />
        <Zoltar />
        <Maze />
      </>
    );
  }
}

export default App;

