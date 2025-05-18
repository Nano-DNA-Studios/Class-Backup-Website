import React from "react";
import "./FilePropertyHeader.css";
import document from './assets/document.svg';

//Add some code to fectch the properties to display

class FilePropertyHeader extends React.Component {

    render() {

        let props = ["Class Name", "Tags", "Professor", "Term", "Size", "Download"];
        let flexSize = [4, 4, 2, 1, 1, 1, 1];


        let items = props.map((item, index) => (
            <p className="header-property" key={index} style={{ flex: flexSize[index] }}>
                {item}
            </p>
        ));


        return (
            <div className="main-card-header">

                <div style={{ flex: 1, alignContent: "center", justifyContent: "center", display: "flex" }}>
                    <img style={{ width: "50%", }} src={document} alt="Folder Icon" />
                </div>
                
                {items}

            </div>
        );
    }
}

export default FilePropertyHeader;