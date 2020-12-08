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

    enterUserWish = (e) =>{
        console.log(e.target.value);
        this.setState({
            userWish: e.target.value
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
                        Zoltar speaks! Tell him your name, choose a category, and give a brief description of what you wish to learn. If you can navigate your coin through Zoltar's maze, he will grant you the advice you seek!
                    </p>
                </section>

                <form onSubmit={this.handleSubmit}>
                    <div className="userNameInput">
                        <label htmlFor="userName">Type your name</label>
                        <input type="text" id="userName" placeholder="Sam Smith" required onChange={this.enterUserName} />
                    </div>

                    <div className="userSelectionOptions" onChange={this.handleSelect}>
                        <label htmlFor="people"><h2>Social</h2></label>
                        <input type="radio" name="userCategory" id="people" />

                        <label htmlFor="happiness"><h2>Happiness</h2></label>
                        <input type="radio" name="userCategory" id="happiness" />

                        <label htmlFor="you"><h2>Self Improvement</h2></label>
                        <input type="radio" name="userCategory" id="you" />

                        <label htmlFor="good"><h2>Feeling Good</h2></label>
                        <input type="radio" name="userCategory" id="good" />

                        <label htmlFor="life"><h2>Life</h2></label>
                        <input type="radio" name="userCategory" id="life" />

                        <label  htmlFor="things"><h2>Things</h2></label>
                        <input type="radio" name="userCategory" id="things" />

                        <label  htmlFor="love"><h2>Love</h2></label>
                        <input type="radio" name="userCategory" id="love" />

                        <label  htmlFor="work"><h2>Work</h2></label>
                        <input type="radio" name="userCategory" id="work" />

                        <label  htmlFor="other"><h2>Other</h2></label>
                        <input type="radio" name="userCategory" id="other" checked />
                    </div>
                    
                    <div className="userWishInput" onChange={this.enterUserWish}>
                        <label htmlFor="userWish">Write your wish!</label>
                        <textarea id="userWish" name="userWish" rows="4" cols="40" placeholder = "I wish...." required/>
                    </div>

                    <button>Submit the Wish!</button>
                </form>


                {/* Condition to render the coin only when the submit event is completed */}
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


