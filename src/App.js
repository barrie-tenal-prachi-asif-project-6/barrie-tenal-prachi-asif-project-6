import { Component } from 'react';
import Header from './components/Header.js'
import Zoltar from './components/Zoltar.js';
import Maze from './components/Maze.js';
import Instructions from './components/Instructions.js'
import axios from 'axios';
import './styles/App.scss';


class App extends Component {
  constructor() {
    super();
    this.state = {
      randomAdviceSlip: [],
      specificAdviceSlip: []
    };
  }

  // Function to call API which will give us specific advice categoring to the selected dropdown option..

  getSpecificAdvice = (recivedSelectedCategory) => {
    axios({
      url: `https://api.adviceslip.com/advice/search/${recivedSelectedCategory}`,
      method: "GET",
      responseType: "JSON",
    }).then((res) => {
      console.log(res)
      this.setState({
        specificAdviceSlip: res.data.slips
      })
      console.log(this.state.specificAdviceSlip)
    })
  }

  // Calling random advice API on mount to get a random advice......
  // componentDidMount() {
  //   this.getRandomAdv();
  // }

  getRandomAdv =()=>{
    axios({
      url: `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`,
      method: 'GET',
      responseType: 'json'
    })
      .then((res) => {
        console.log('click here', res);
        const newAdvice = []
        newAdvice.push(res.data.slip)
        this.setState({
          randomAdviceSlip: newAdvice
        }, ()=>{
          console.log('Will it make a diffe???',this.state.randomAdviceSlip);
        }
        )
      })
  }

  newFunction =() =>{
    this.getRandomAdv();
    this.getRandomAdv();
  }


  render() {
    return (
      <>
        <Header />
        <button onClick={this.newFunction}
         >CLICK HERE!</button>
        <Zoltar />
        {/* Passing the function to call the specific selected category to the child  */}
        <Instructions
        specificCategoryFunction = {this.getSpecificAdvice}
        // selectedCategoryFunction = {this.setSelectedUserCategory}
        />
        <Maze />

        {/* when rendering the last page for advice show: 
        if selectedCategory===other ?
        display component with the randomAdvice[] as a prop
        : display wish component with specificAdvice as a prop */}

      </>
    );
  }
}
export default App;


 // if user selects 'other' wish category, then use the API response from axios within the componentDidMount (which gets random advice)
  // else, trigger a new API call, passing the selected user category in as an argument (which gets specific/related advice)


  // IMPORTANT: need to check with the instructor if user selection can be updated in the child component , setting in the parent and changing in the call. 

  // we need to add "random advice" function if the "selectedCategory" is "other" when calling the other child object Wish.

