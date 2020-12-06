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