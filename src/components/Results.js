import { Component } from 'react';
import ZoltarRedEyes from './ZoltarRedEyes.js';
import { Link } from 'react-router-dom';

class Results extends Component {
  render() { 
    return (
       <>
        <h3>Results!!!</h3>
        <ZoltarRedEyes />
        {/* <p>{this.props.adviceSlip[0].advice}</p> */}
        <Link to ="/">
        <button>Play Again!</button>
        </Link>
       </>
    )
  }
}
export default Results;

// const randomizer = function (array) {
//     // store a generated random integer which does not exceed the length of the array
//     const randomNumber = Math.floor(Math.random() * array.length);
//     return array[randomNumber];
// }