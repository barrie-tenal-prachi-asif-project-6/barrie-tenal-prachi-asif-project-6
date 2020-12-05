const Zoltar = () => {
    return (
        <div className="zoltar-image-container">
            <div className="zoltar-image">
                <img src="https://i.ibb.co/FxMnytF/zoltar-head.jpg" alt="zoltar-head" border="0" />
                {/* PREVIOUSLY using animation gallery which will be useful for later with appearing text box // animate__animated animate__shakeY animate__slower animate__infinite */}
                <img className="zoltar-mouth " src="https://i.ibb.co/4myFDDZ/zoltar-mouth.png" alt="zoltar-mouth" border="0"/>
            </div>
        </div>
    );
}

export default Zoltar;