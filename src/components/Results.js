import { Component } from 'react';
import ZoltarRedEyes from './ZoltarRedEyes.js';
import { Link } from 'react-router-dom';

class Results extends Component {

  randomizer = (array) => {
    // store a generated random integer which does not exceed the length of the array
    const randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber].advice;
  }

  render() { 
    return (
      <>
        <h3>{this.props.userName}, your wish has been granted! </h3>
        <ZoltarRedEyes />
        <p>
          {
            this.randomizer(this.props.adviceSlip)
          }
        </p>
        <Link to="/">
          <button>Play Again!</button>
        </Link>
      </>
    );
  }
}
export default Results;

// const randomizer = function (array) {
//     // store a generated random integer which does not exceed the length of the array
//     const randomNumber = Math.floor(Math.random() * array.length);
//     return array[randomNumber];
// }

// selectedAdviceSlip = randomizer(this.props.adviceSlip)
// add the  selectedAdviceSlip[0].advice as an advice , and selectedAdviceSlip[0].id as key