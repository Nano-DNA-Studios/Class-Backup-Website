import "./MainCardPropertyHeader.css"

//Add some code to fectch the properties to display

function GetFolderProperties() {
    let props = ["Class Name", "Tags", "Professor", "Term", "Size", "Download"]
    let flexSize = [4, 4, 2, 1, 1, 1];

    return props.map((item, index) => (
        <p className="header-property" key={index} style={{ flex: flexSize[index] }}>
            {item}
        </p>
    ));
}

function GetMainCardPropertyHeader() {
    return (
        <div className="main-card-header">
            {GetFolderProperties()}
        </div>
    )
}

export default GetMainCardPropertyHeader;