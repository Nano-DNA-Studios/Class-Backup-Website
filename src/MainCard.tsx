import React from "react";
import "./MainCard.css";
import FolderItem from "./FolderItem";
import documentLogo from './assets/document.svg';
import classData from './assets/ClassBackups.json';

class MainCard extends React.Component {

    state = {
        content: classData,
        path: "",
    }

    DownloadClass(item: any) {
        const fileName = encodeURIComponent(item.Name);
        const link = document.createElement("a");
        let additionalPath = item.Path ? item.Path + "/" : "";

        link.href = `/HostedFiles/${additionalPath}${fileName}`; //Path relative to Public folder
        link.download = item.Name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    HandleClick(item: any) {
        console.log(item);

        if (!item.IsFile && item.Content) {

            this.setState({
                path: item.Name,
                content: item.Content
            });
        } else if (item.IsFile) 
            this.DownloadClass(item);
    }

    GetFolderContent() {
        return this.state.content.map((item, index) => (
            <FolderItem onClick={() => { this.HandleClick(item) }} key={index} {...item} />
        ));
    }

    GetHeader() {
        let props = ["Name", "Tags", "Size", "Download"];
        let flexSize = [4, 4, 1, 1];

        let items = props.map((item, index) => (
            <p className="header-property" key={index} style={{ flex: flexSize[index] }}>
                {item}
            </p>
        ));

        return (
            <div className="main-card-header">
                <div style={{ flex: 1, alignContent: "center", justifyContent: "center", display: "flex" }}>
                    <img style={{ width: "50%", }} src={documentLogo} alt="Folder Icon" />
                </div>
                {items}
            </div>
        );
    }

    render() {
        return (
            <div className="main-card">
                {this.GetHeader()}
                {this.GetFolderContent()}
            </div>
        );
    }
}

export default MainCard;