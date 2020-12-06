import { Component } from 'react';
import './styles/App.scss';
import Axios from 'axios';

class AxiosTest extends Component {

    constructor() {
        super();
        this.state = {
            adviceSlip: [],
            selectedChoice: '',
        }
    }

    // handleSelect= (e)=>{
    //   console.log(e.target.value);
    //   this.setState({
    //     selectedChoice: e.target.value
    //   })
    // }


    // handleSubmit = (e) =>{
    //   e.preventDefault();
    //   console.log(this.state.selectedChoice);
    //   this.specificAdviceQuery(this.state.selectedChoice)
    // }

    // specificAdviceQuery = (receivedResponse) => {
    //   console.log(`https://api.adviceslip.com/advice/search/${receivedResponse}`);

    //   Axios({
    //     url: `https://api.adviceslip.com/advice/search/${receivedResponse}`,
    //     GET: 'Method',
    //     responseType: 'JSON'
    //   }).then((res) => {
    //     console.log(res.data.slips);
    //     this.setState({
    //       adviceSlip: res.data.slips
    //     })
    //     console.log(this.state.adviceSlip);
    //   })
    // }  


    // TEST for the search query URL:
    componentDidMount() {
        Axios({
            // url: 'https://api.adviceslip.com/advice',
            url: ' 	https://api.adviceslip.com/advice/search/winter',
            // Life (11), happiness (3),money (1), dog(1), winter (1), people(11), work(7)
            GET: 'Method',
            responseType: 'JSON'
        })
            .then((res) => {
                console.log(res.data.slips);
                // this.setState({
                //   adviceSlip: res.data.slips
                // })
            })
    }



    render() {
        return (
            <div>
                <div className="App">
                    <header className="wrapper">
                        <h1>Barrie Test</h1>
                        <h2>More testing</h2>
                    </header>
                </div>

                {/* <main>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="category">Category:</label>
            <select 
            name="category" 
            id="category" 
            onChange={this.handleSelect}
            value={this.state.selectedChoice}>
              <option value="placeholder">Choose one:</option>
              <option value="life">life</option>
              <option value="cats">cats</option>
            </select>
            <button>Wish!</button>
          </form>
        


        <article className="first-article">
          {
            this.state.adviceSlip.map((receivedObj)=>{
              return(
                <p key={receivedObj.id}>
                  {receivedObj.advice}
                </p>
              )
            })
          }
        </article>
        </main> */}
            </div>
        )
    }
}
export default AxiosTest;


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
