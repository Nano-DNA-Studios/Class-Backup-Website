import React from "react";
import "./FilePropertyHeader.css"

//Add some code to fectch the properties to display

class FilePropertyHeader extends React.Component {

    GetFolderProperties() {
        let props = ["Class Name", "Tags", "Professor", "Term", "Size", "Download", "Preview"];
        let flexSize = [4, 4, 2, 1, 1, 1, 1];

        return props.map((item, index) => (
            <p className="header-property" key={index} style={{ flex: flexSize[index] }}>
                {item}
            </p>
        ));
    }

    render() {
        return (
            <div className="main-card-header">
                {this.GetFolderProperties()}
            </div>
        );
    }
}

export default FilePropertyHeader;