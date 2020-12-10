import { Component } from 'react';
import ZoltarRedEyes from './ZoltarRedEyes.js';
import { Link } from 'react-router-dom';

class Results extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     cachedAdvice: []
  //   }
  // }


  // componentDidMount() {
  //   // this.props.getRandomAdvice();
  //   // console.log('you got random advice', this.props.getRandomAdvice[0].advice)
  //   // const randomAdviceBackup = this.props.getRandomAdvice();
  //   this.setState({
  //     cachedAdvice: this.props.adviceSlip
  //   })
  // }



  // Function that generates a random number that will be used to pick a random advice object from the adviceSlip array
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

          {/* if the adviceSlip array is empty, they render a generic piece of advice. otherwise, display a random piece of advice from the adviceSlip array. */}
          {
            (this.props.adviceSlip.length === 0)
              ? 
              <div>
                <h2>Your wish has been granted!!!</h2>
                <p> A person of words and not deeds is like a garden full of weeds. </p>
              </div>
              : 
              <div>
                <h2>{this.props.userName}, your wish has been granted!</h2>
                <p>
                  {
                    this.randomizer(this.props.adviceSlip)
                  }
                </p>
              </div>
          }

            <Link to="/">
              <button className="resetWish" onClick={this.props.emptyAdvice}>Make another wish</button>
            </Link>
        </div>

        
      </div>
    );
  }
}
export default Results;