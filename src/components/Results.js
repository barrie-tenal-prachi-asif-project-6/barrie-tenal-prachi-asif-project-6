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
        <ZoltarRedEyes />

        <div className="wishContainer wrapper">
          <img className="cornerImage topLeftCornerImage" src="https://i.ibb.co/pXsj53Z/top-Left-Corner.png" alt="a decorative corner drawing of an abstract bird" />
          <img className="cornerImage topRightCornerImage" src="https://i.ibb.co/j6nyngG/top-Right-Corner.png" alt="a decorative corner drawing of an abstract bird" />
          <img className="cornerImage bottomLeftCornerImage" src="https://i.ibb.co/wLTHwJh/bottom-Left-Corner.png" alt="a decorative corner drawing of an abstract bird" />
          <img className="cornerImage bottomRightCornerImage" src="https://i.ibb.co/BNKzc4S/bottom-Right-Corner.png" alt="a decorative corner drawing of an abstract bird" />

            <h2>{this.props.userName}, your wish has been granted! </h2>
            <p>
              {
                this.randomizer(this.props.adviceSlip)
              }
            </p>
            <Link to="/">
              <button className="resetWish">Make another wish</button>
            </Link>
        </div>
      </div>
    );
  }
}
export default Results;