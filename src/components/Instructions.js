// Prachi
import { Link } from 'react-router-dom';
import { Component } from 'react';

// PROPS:
// getSpecificAdvice = { this.getSpecificAdvice }
// getRandomAdvice = { this.getRandomAdvice }

class Instructions extends Component {

    constructor(){
        super();
        this.state={
            selectedCategory: "",
            userName: "",
            userWish: ""
        }
    }

    // Function for taking the userName
    enterUserName = (e) =>{
        e.preventDefault();
        this.setState({
            userName: e.target.value
        })
    }

    // function for storing the wish

    handleSelect = (e) => {
        console.log(e.target.id)
        this.setState({
            selectedCategory: e.target.id
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.selectedCategory === 'other'){
            this.props.getRandomAdvice();
        }else{
            this.props.getSpecificAdvice(this.state.selectedCategory);
        }
    }


    render() {
        return (
            <div className="instructionsFormContainer">
                <section className="zoltarInstructions">
                    <p>
                        Welcome to Zoltar Speaks! Please provide your name, wish category and your wish description below. Then click the coin to travel through the maze and get your wish granted by Zoltar!!
                    </p>
                </section>

                <form onSubmit={this.handleSubmit}>
                    <div className="userNameInput">
                        <input type="text" id="userName" placeholder="Type Your Name..." onChange={this.enterUserName} required/>
                        <label className="srOnly" htmlFor="userName">Type your name here</label>
                    </div>

                    <div className="userSelectionOptions" onChange={this.handleSelect}>
                        <input type="radio" name="userOption" id="people" />
                        <label htmlFor="people"><h2>Social</h2></label>

                        <input type="radio" name="userOption" id="happiness" />
                        <label htmlFor="happiness"><h2>Happiness</h2></label>

                        <input type="radio" name="userOption" id="you" />
                        <label htmlFor="you"><h2>Self Improvement</h2></label>

                        <input type="radio" name="userOption" id="good" />
                        <label htmlFor="good"><h2>Feeling Good</h2></label>

                        <input type="radio" name="userOption" id="life" />
                        <label htmlFor="life"><h2>Life</h2></label>

                        <input type="radio" name="userOption" id="things" />
                        <label  htmlFor="things"><h2>Things</h2></label>

                        <input type="radio" name="userOption" id="love" />
                        <label  htmlFor="love"><h2>Love</h2></label>

                        <input type="radio" name="userOption" id="work" />
                        <label  htmlFor="work"><h2>Work</h2></label>

                        <input type="radio" name="userOption" id="other" />
                        <label  htmlFor="other"><h2>Other</h2></label>
                    </div>
                    
                    <div className="userWishInput">
                        <textarea id="userWish" name="userWish" rows="4" cols="50" placeholder="Type Your Wish..." required/>
                        <label className="srOnly" htmlFor="userWish">Type your wish here</label>
                    </div>

                    <button>Submit the Wish!</button>
                </form>

                <Link to="/maze">
                    <button>COIN</button>
                </Link>
                
            </div>
        )
    }
}
export default Instructions;    


