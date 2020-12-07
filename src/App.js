import { Component } from 'react';
import Header from './components/Header.js'
import Zoltar from './components/Zoltar.js';
import Maze from './components/Maze.js';
import Instructions from './components/Instructions.js'
import Axios from 'axios';
import './styles/App.scss';


class App extends Component {
  constructor() {
    super();
    this.state = {
      randomAdviceSlip: [],
      specificAdviceSlip: [], 
      selectedCategory: '' 
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

  // if user selects 'other' wish category, then use the API response from axios within the componentDidMount (which gets random advice)
  // else, trigger a new API call, passing the selected user category in as an argument (which gets specific/related advice)


  // IMPORTANT: need to check with the instructor if user selection can be updated in the child component , setting in the parent and changing in the call. 

  // we need to add "random advice" function if the "selectedCategory" is "other" when calling the other child object Wish.


  getSpecificAdvice = (selectedUserCategory) => {
    console.log(`https://api.adviceslip.com/advice/${selectedUserCategory}`)
    Axios({
      url: `https://api.adviceslip.com/advice/${selectedUserCategory}`,
      method: "GET",
      responseType: "JSON",
    }).then((res) => {
      console.log(res.data.slips);
      this.setState({
        specificAdviceSlip: res.data.slips
      });
      console.log(this.state.specificAdviceSlip);
    })
  }

  // calling a function which will setState in the parent app.js so that it can be used later when the user selects the dropdown option
  saveSelectedCategory = (selectedDropdownCategory) =>{
    this.setState({
      selectedCategory: selectedDropdownCategory
    })
  }

  render() {
    return (
      <>
        <Header />
        <Zoltar />
        {/* Passing the function to call the specific selected category to the child  */}
        <Instructions
        specificCategoryFunction = {this.getSpecificAdvice}
        saveCategoryFunction = {this.saveSelectedCategory}
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

