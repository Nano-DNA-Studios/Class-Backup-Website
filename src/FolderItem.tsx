import React from 'react';
import "./FolderItem.css";
import downloadLogo from './assets/download.svg'
import folder from './assets/folder.svg'
import document from './assets/document.svg'

interface FolderItemProps {
    IsFile: boolean;
    Name: string;
    Tags: string[];
    Size: string;
    onClick: () => void;
}

class FolderItem extends React.Component<FolderItemProps> {

    constructor(props: FolderItemProps) {
        super(props);
    }

    render() {
        let imageFile: string = this.props.IsFile ? document : folder;
        let downloadable: "visible" | "hidden" = this.props.IsFile ? "visible" : "hidden";

        return (
            <div className='folder-item' onClick={this.props.onClick}>
                <div style={{ flex: 1, }}>
                    <img style={{ width: "60%" }} src={imageFile} alt="Folder Icon" />
                </div>
                <p className="folder-item-property" style={{ flex: 4 }}> {this.props.Name} </p>
                <p className="folder-item-property" style={{ flex: 1 }}> {this.props.Size} </p>
                <div style={{ flex: 1, }}>
                    <img style={{ width: "60%", color: "blue", stroke: "blue", fill: "blue", visibility: downloadable }} src={downloadLogo} alt="Download Icon" />
                </div>
            </div>
        );
    }
}

export default FolderItem;