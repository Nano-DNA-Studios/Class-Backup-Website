import React from "react";
import "./MainCard.css";
import FilePropertyHeader from "./FilePropertyHeader";
import FolderItem from "./FolderItem";

class MainCard extends React.Component {

    GetFolderContent()
    {
        let folderContent = [
            {
                ClassName: "Nano 101",
                Tags: ["Nano", "101"],
                Professor: "Dr. Smith",
                Term: "Fall 2023",
                Size: "1.2 GB",
                Download: "Download Link",
                Preview: "Preview Link"
            },
            {
                ClassName: "Nano 102",
                Tags: ["Nano", "102"],
                Professor: "Dr. Johnson",
                Term: "Spring 2024",
                Size: "2.5 GB",
                Download: "Download Link",
                Preview: "Preview Link"
            }
        ];

        return folderContent.map((item, index) => (
            <FolderItem onClick={() => { console.log("Clicked on ") }} key={index} {...item} />
        ));
    }

    render() {
        return (
            <div className="main-card">
                <FilePropertyHeader/>
                {this.GetFolderContent()}
            </div>
        );
    }


}

export default MainCard;