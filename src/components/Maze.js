import { Component } from 'react';

class Maze extends Component {
    constructor() {
        super();
        this.state = {
            maze: []
        }
    }


    // a function that builds the maze & displays both the maze & coin onto the users page
    createMazeAndCoin = () => {
        // BUILDING MAZE ----------------------------------------
        // build an example maze template within an array by using 0's (path) and 1's (wall)
        const mazeLayout = [
            1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
            1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1,
            1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1,
            1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
            1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1,
            1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
            1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1,
            1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1
        ]

        // DISPLAYING MAZE & COIN ----------------------------------------
        // store the div with a class of grid into a variable & clear any content located within the div
        const mazeBox = document.querySelector('.maze');
        while (mazeBox.firstChild) {
            mazeBox.removeChild(mazeBox.firstChild);
        }

        // create an empty array
        const mazeSquares = []

        // loop through the mazeLayout array & push each value into the empty mazeSquares array 
        for (let i = 0; i < mazeLayout.length; i++) {
            // give each square within the maze a height and width, append (a big no-no for this project but fine for the experimentation stages) to the maze div being rendered, and push them all into the mazeSquares array
            const square = document.createElement('div');
            mazeBox.appendChild(square);
            mazeSquares.push(square);

            // add visual layout to the maze by making the path appear pink & the walls appear black
            if (mazeLayout[i] === 0) {
                mazeSquares[i].classList.add('path');
            } else if (mazeLayout[i] === 1) {
                mazeSquares[i].classList.add('wall');
            }
        }

        // display coin in the maze
        let coinCurrentIndex = 1
        mazeSquares[coinCurrentIndex].classList.add('coin');

        // update the maze state with the new mazeSquares array
        this.setState({
            maze: mazeSquares
        })






        console.log('FULL MAZE ARRAY HERE:', mazeSquares)

        // MOVING COIN ----------------------------------------
        // a function that moves the coin through the maze when the user presses the up, down, left, and right arrow keys
        const moveCoin = (event) => {
            
            // remove the coin class from the coin's starting index
            this.state.maze[coinCurrentIndex].classList.remove('coin');
            
            switch (event.keyCode) {
                // if user hits the left arrow key:
                    // (a) check to see if the index number that is one below the coin's current index number (ie: check the value of the index number to the 'left' of the coin's current index number) is actually a path (ie: ensure it is not a wall)
                    // (b) if above condition is satisfied, subtract one from the coin's current index number
                case 37:
                    if (this.state.maze[coinCurrentIndex -1].classList.contains('path')) coinCurrentIndex -=1
                    break

                //  if user hits right arrow key:
                    // (a) check to see if the index number that is one above the coin's current index number (ie: check the value of the index number to the 'right' of the coin's current index number) is actually a path
                    // (b) if above condition is satisfied, add one to the coin's current index number
                case 39:
                    if (this.state.maze[coinCurrentIndex + 1].classList.contains('path')) coinCurrentIndex += 1
                    break

                //  if user hits up arrow key:
                    // (a) check to see if the coin is able to continue moving up (ie: ensure the coin's current index number subtracted by 28 is equal to or greater than 0 - because if it's less than 0 and the user hits the up arrow, the coin will disappear off of the top edge of the maze as this means the coin is currently located along the top edge of the maze (index # 0 to 27))
                    // (b) check to see if the index number that is 28 below the coin's current index number (ie: check the value of the index number that is directly 'on top' of the coin's current index number) is actually a path
                    // (c) if both above conditions are satisfied, subtract 28 from the coin's current index number (ie: the width/height of the maze)
                case 38:
                    if (coinCurrentIndex - 28 >= 0 && this.state.maze[coinCurrentIndex - 28].classList.contains('path')) coinCurrentIndex -=28
                    break

                //  if user hits down arrow key:
                    // (a) check to see if the coin is able to continue moving down (ie: ensure that 28 added to the coin's current index number is less than 28*28 (784) - because if it's more than 784 and the user hits the down arrow, the coin will disappear off of the bottom edge of the maze as this means the coin is currently located along the bottom edge of the maze (index # 756 to 784))
                    // (b) check to see if the index number that is 28 above the coin's current index number (ie: check the value of the index number that is directly 'beneath' of the coin's current index number) is actually a path
                    // (c) if both above condition is satisfied, add 28 to the coin's current index number (ie: the width/height of the maze)
                case 40:
                    if (coinCurrentIndex + 28 < 28 * 28 && mazeSquares[coinCurrentIndex + 28].classList.contains('path')) coinCurrentIndex += 28
                    break

            }

            // add the coin class to the coin's new index
            this.state.maze[coinCurrentIndex].classList.add('coin');
        }





        // listen for the user to click one of the 4 arrow keys within the function that moves the coin 
        document.addEventListener('keydown', moveCoin);


        // NOTE: perhaps wait to see if coin's index number is 783, then show a pop-up that congratulates user and asks them to click a button to receive their advice (then that button routes them to advice page)
    }



    // componentDidUpdate() {
    //     document.addEventListener('keydown', moveCoin);
    // }



    render() { 
        return (
            <div className="maze" onClick={this.createMazeAndCoin} onKeyDown={this.moveCoin}>
                {/* <p>CLICK ME FOR MAZE</p> */}
            </div>
        );
    }
}

export default Maze;