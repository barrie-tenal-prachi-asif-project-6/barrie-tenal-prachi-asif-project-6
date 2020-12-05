// ZOLTAR SPEAKS:


// Display the landing page
    // animate zoltar's face
    // Instructions will be displayed on the landing page
    // prompt user to choose "wish category", "Name","wish" , all the inputs are "required" before submitting the "submit/coin"
    // Once the user clicks on "insert coin button" :
        // collect input values and update the state
        // the landing page will redirect the user to the "Maze"
    // On submit, when the state changes, API makes the call and sends the info as props to the "Zoltar Red Eyes/Grnated wish" page component 
    // API: If user selects "Other/unknown" : API Random Advice call
     // API: If user selects any other options : API Query Advice call

// On "Maze" page:
    // User has to direct the coin through the maze using arrow keys to reach the final box/slot/ "Zoltar's Box"
    // Once the coin is in "zoltar's box", page will be redirected to "Zoltar Red Eyes/Grnated wish" page 
    // Set timeout once the coin reaches the Zoltar's box to avoid the immediate page transitions

    // For Tablet & Mobile devices: Arrow buttons will be provided to move the coin through the maze 

// On "Zoltar Red Eyes/Grnated wish" page:
    // Once the user lands on this page: 
        // Zoltar's eyes will turn red
        // Text box appears saying "Your wish is granted" and also loads advice from the API call (props from landing page)



// Components: 
    // Zoltar 
    // form 
    // maze
    // wish/advice text box

// States: 
    // userSelection (dropdown): userWishCategory
    // userName
    // apiAdviceResponse

// TECH STACK
    // vsCode
        // Live-Share by Microsoft
    
    // CSS
        // Flexbox
        // Grid
    
    // REACT
        // MODULES
            // Axios
            // node-sass
            // Firebase (OPTIONAL)
            // react-router-dom 
    