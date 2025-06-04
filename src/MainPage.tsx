import React from "react";
import "./MainPage.css";
import FolderItem from "./FolderItem";
import documentLogo from './assets/document.svg';
import classData from './assets/ClassBackups.json';
import backBtn from './assets/backbtn.svg';
import homeBtn from './assets/home.svg';

interface FolderState {
    pathStack: {
        name: string;
        content: any[];
    }[];
}

class MainPage extends React.Component<{}, FolderState> {

    state: FolderState = {
        pathStack: [{ name: "Class Backup", content: classData }],
    }

    DownloadClass(item: any) {
        const fileName = encodeURIComponent(item.Name);
        const link = document.createElement("a");
        let additionalPath = item.Path ? item.Path + "/" : "";

        // Path relative to Public folder
        link.href = `/ClassBackups/${additionalPath}${fileName}`;
        link.download = item.Name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        if (item.Size.includes("GB"))
            alert("Downloading " + item.Name + ". This is a really Large File, this may take a Minute or more to Start Downloading, please be patient and wait");
    }

    HandleHomeBtn() {
        this.setState({
            pathStack: [{ name: "Class Backups", content: classData }]
        });
    }

    HandleBackBtn() {
        this.setState((prevState) => {
            if (prevState.pathStack.length <= 1) return null;

            const newStack = [...prevState.pathStack];
            newStack.pop();

            return { pathStack: newStack };
        });
    }

    HandleClick(item: any) {
        console.log(item);

        if (!item.IsFile && item.Content) {
            this.setState({
                pathStack: [...this.state.pathStack, { name: item.Name, content: item.Content }]
            });
        } else if (item.IsFile)
            this.DownloadClass(item);
    }

    GetFolderContent() {
        const current = this.state.pathStack[this.state.pathStack.length - 1];
        return current.content.map((item, index) => (
            <FolderItem onClick={() => { this.HandleClick(item) }} key={index} {...item} />
        ));
    }

    GetHeader() {
        let props = ["Name", "Size", "Download"];
        let flexSize = [4, 1, 1];

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

    GetNavBar() {
        return (
            <div className="navigation-bar">
                <img style={{ width: "5%" }} src={backBtn} className="btn" alt="Back" onClick={() => this.HandleBackBtn()} />
                <img style={{ width: "5%" }} src={homeBtn} className="btn" alt="Home" onClick={() => this.HandleHomeBtn()} />
                <h2> {this.state.pathStack.map(p => p.name).join("/")} </h2>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.GetNavBar()}
                <div className="main-card">
                    {this.GetHeader()}
                    {this.GetFolderContent()}
                </div>
            </div>
        );
    }
}

export default MainPage;