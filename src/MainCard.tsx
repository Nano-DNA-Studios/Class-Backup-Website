import "./MainCard.css";
import GetMainCardPropertyHeader from "./MainCardPropertyHeader";

function MainCard() {

    return (
        <div className="main-card">
            {GetMainCardPropertyHeader()}
            <h1>
                Hello World new Website
            </h1>
        </div>
    );

}


export default MainCard;