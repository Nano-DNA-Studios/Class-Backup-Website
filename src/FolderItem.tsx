import React from 'react';
import "./FolderItem.css";
import downloadLogo from './assets/download.svg'
import folder from './assets/folder.svg'


interface FolderItemProps {
    ClassName: string;
    Tags: string[];
    Professor: string;
    Term: string;
    Size: string;
    Download: string;
    Preview: string;
    onClick: () => void;
}


class FolderItem extends React.Component<FolderItemProps> {


    constructor(props: FolderItemProps) {
        super(props);
    }

    GetTags() {

        let tags: string[] = this.props.Tags;

        return (
            <div style={{ flex: 4, flexDirection: "row", display: "flex", flexWrap: "nowrap", gap: "5px" }}>

                {tags.map((item, index) => (<p className="folder-item-property" key={index} style={{ borderRadius: "30%", backgroundColor: "red", padding: "5px" }} >
                    {item}
                </p>))}
            </div>
        );
    }




    render() {

        return (
            <div className='folder-item' onClick={this.props.onClick}>
                <div style={{ flex: 1, }}>
                    <img style={{ width: "75%" }} src={folder} alt="Folder Icon" />
                </div>
                <p className="folder-item-property" style={{ flex: 4 }}> {this.props.ClassName} </p>
                {this.GetTags()}
                <p className="folder-item-property" style={{ flex: 2 }}> {this.props.Professor} </p>
                <p className="folder-item-property" style={{ flex: 1 }}> {this.props.Term} </p>
                <p className="folder-item-property" style={{ flex: 1 }}> {this.props.Size} </p>
                <div style={{ flex: 1, }}>
                    <img style={{ width: "75%", color: "blue", stroke: "blue", fill: "blue" }} src={downloadLogo} alt="Download Icon" />
                </div>

            </div>
        );
    }
}

export default FolderItem;