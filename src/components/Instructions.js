// Prachi

import { Component } from 'react';

// PROPS:
// specificCategoryFunction = {this.getSpecificAdvice }
// selectedCategoryFunction = {this.setSelectedUserCategory}

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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.specificCategoryFunction(this.state.selectedCategory)
    }


    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="category">Category:</label>
                    <select
                    name="category"
                    id="category"
                    onChange={this.handleSelect}>
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

