const Zoltar = () => {
    return (
        <div className="zoltar-image-container">
            <div className="zoltar-image">
                <img src="https://i.ibb.co/FxMnytF/zoltar-head.jpg" alt="zoltar-head" border="0" />
                {/* initially used animation gallery which I installed with 'npm i animate.css --save' (linked in index.html & will be useful for later with appearing text box) */}
                <img className="zoltar-mouth " src="https://i.ibb.co/4myFDDZ/zoltar-mouth.png" alt="zoltar-mouth" border="0"/>
            </div>
        </div>
    );
}

export default Zoltar;



// Advice slip API keywords

// MULTIPLE results:
    // life (11)
    // love (5)
    // friends (3)
    // happiness (3)
    // learn (4) - 'learning'
    // old (6) - 'aging'
    // art (4)
    // food (3)
    // feeling (2) - 'emotions'


// LIMITED results:
    // money (1)
    // exercise (1)
    // fun (2) - one might be deemed 'inappropriate', not sure the client is aware of it lol
    // dog (1), horse (1), probably other random animals... but not 'animal' lol


// NO results (what even is this api?!):
    // health
    // relationships
    // travel
    // family
    // sibling/sister/brother
    // religion
    // career
    // laugh/funny/joke/humor(ous)
    // school/study(ing)
    // animal
    // energy/activity
    // emotion(s/al)