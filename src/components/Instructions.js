// Prachi

import { Component } from 'react';

// PROPS:
// randomAdive = { this.state.randomAdviceSlip }
// specificadvice = { this.state.specificAdviceSlip }
// specificCategory = { this.state.selectedUserCategory }
// changeCategoryFunction = { this.handleSelect }
// submitCategoryFunction = { this.handleSubmit }

class Instructions extends Component {

    constructor(){
        super();
        this.state={
            selectedCategory: ""
        }
    }

    handleSelect = (e) => {
        console.log(e.target.value);
        this.setState({
            selectedCategory: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if (this.state.selectedCategory !== 'other'){
            this.props.specificCategoryFunction(this.state.selectedCategory)
        }
        else{
            console.log('need to call the random advice');
        }
        
    }


    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="category">Category:</label>
                    <select
                    name="category"
                    id="category"
                    onChange={this.handleSelect}
                    value={this.state.selectedCategory}>
                        <option value="placeholder">Choose one:</option>
                        <option value="life">life</option>
                        <option value="people">People</option>
                        <option value="money">Money</option>
                        <option value="other">Other</option>
                    </select>
                    <button>Wish!</button>
                </form>
            </main>
        )
    }
}
export default Instructions;    