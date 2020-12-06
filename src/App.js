import { Component } from 'react';
import './styles/App.scss';
import Axios from 'axios';

class App extends Component {

  


  render() {
    return (
      <div>
        <div className="App">
          <header className="wrapper">
            <h1>Barrie Test</h1>
            <h2>More testing</h2>
          </header>
        </div>
      </div>
    )
  }
}
export default App;


// if the url is 'https://api.adviceslip.com/advice' the output needs to be either assigned as an this.state.adviceSlip and this.state.adviceKey or can be pushed to an empty array( but knowing we need only one advice, we do not need to map through the array as this url returns only one object)

// axios call for this url:
// getRandomAdvice = ()=>{
//   Axios({
//     // url: 'https://api.adviceslip.com/advice',
//     url: ' 	https://api.adviceslip.com/advice/search/other',
//     GET: 'Method',
//     responseType: 'JSON'
//   })
//     .then((res) => {
//       console.log(res.data.slip);
//       const newAdvice = []
//       newAdvice.push(res.data.slip)
//       this.setState({
//         adviceSlip: newAdvice
//       })
//     })
// }
