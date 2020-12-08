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
      <div className="Results">
        <h3>{this.props.userName}, your wish has been granted! </h3>
        <ZoltarRedEyes />
        <p>
          {
            this.randomizer(this.props.adviceSlip)
          }
        </p>
        <Link to="/">
          <button>Make another wish!</button>
        </Link>
      </div>
    );
  }
}
export default Results;