import { Link } from 'react-router-dom';
import { Component } from 'react';


class Instructions extends Component {

    constructor(){
        super();
        this.state={
            selectedCategory: "",
            userWish: ""
        }
    }
    
    // Function for grabbing & storing the user's name
    enterUserName = (e) => {
        this.props.updateName(e.target.value);
    }

    // Function for grabbing & storing the user's wish description
    enterUserWish = (e) => {
        console.log(e.target.value);
        this.setState({
            userWish: e.target.value
        })
    }

    // Function for grabbing & storing the user's wish category
    handleSelect = (e) => {
        console.log(e.target.id)
        this.setState({
            selectedCategory: e.target.id
        })
    }

    // Function for calling the API functions depending on the user's wish category choice
    handleSubmit = (e) => {
        e.preventDefault();
        // If the user chooses the wish category of 'other', call the function that initiates an API call to the random advice generator. If the user selects any other wish category, then call the function that initiates an API call to the specific advice generator, passing through their chosen wish category as an argument to ensure related advice is received.
        if (this.state.selectedCategory === 'other'){
            this.props.getRandomAdvice();
        } else {
            this.props.getSpecificAdvice(this.state.selectedCategory);
        }
    }


    render() {
        return (
            <div className="instructionsFormContainer">
                <section className="zoltarInstructions">
                    <p>
                        Zoltar speaks! Tell him your name, choose a category, and give a brief description of what you wish to learn. If you can navigate your coin through Zoltar's maze, he will grant you the advice you seek!
                    </p>
                </section>

                <form onSubmit={this.handleSubmit}>
                    <div className="userNameInput">
                        <input type="text" id="userName" placeholder="Sam Smith" required onChange={this.enterUserName} />
                        <label htmlFor="userName" className="srOnly">Type your name</label>
                    </div>

                    <div className="userSelectionOptions" onChange={this.handleSelect}>
                        <input type="radio" name="userCategory" id="people" />
                        <label htmlFor="people"><h2>Social</h2></label>

                        <input type="radio" name="userCategory" id="happiness" />
                        <label htmlFor="happiness"><h2>Happiness</h2></label>

                        <input type="radio" name="userCategory" id="you" />
                        <label htmlFor="you"><h2>Self Improvement</h2></label>

                        <input type="radio" name="userCategory" id="good" />
                        <label htmlFor="good"><h2>Feeling Good</h2></label>

                        <input type="radio" name="userCategory" id="life" />
                        <label htmlFor="life"><h2>Life</h2></label>

                        <input type="radio" name="userCategory" id="things" />
                        <label  htmlFor="things"><h2>Things</h2></label>

                        <input type="radio" name="userCategory" id="love" />
                        <label  htmlFor="love"><h2>Love</h2></label>

                        <input type="radio" name="userCategory" id="work" />
                        <label  htmlFor="work"><h2>Work</h2></label>

                        <input type="radio" name="userCategory" id="other" />
                        <label  htmlFor="other"><h2>Other</h2></label>
                    </div>
                    
                    <div className="userWishInput" onChange={this.enterUserWish}>
                        <textarea id="userWish" name="userWish" rows="4" cols="40" placeholder = "I wish...." required/>
                        <label htmlFor="userWish" className="srOnly">Write your wish!</label>
                    </div>

                    <button>Submit the Wish!</button>
                </form>


                {/* Conditionally render the coin only when the submit event is completed */}
                {
                    (this.props.adviceSlip.length === 0)?
                        null
                    :
                        <Link to="/maze">
                            <button>COIN</button>
                        </Link>
                }
                
                
            </div>
        )
    }
}
export default Instructions;    


