import os
import json

# Get the List of files and folders in the directory
files = os.listdir("E:\\Backups\\Important Backup\\School\\University Class Backups")

# Convert the Size in Bytes to Readable Format (KB, MB, GB)
def ConvertToReadableSize (size):
    if size < 1024:
        return str(size) + " B"
    elif size < 1024 * 1024:
        return str(round(size / 1024, 2)) + " KB"
    elif size < 1024 * 1024 * 1024:
        return str(round(size / (1024 * 1024), 2)) + " MB"
    elif size < 1024 * 1024 * 1024 * 1024:
        return str(round(size / (1024 * 1024 * 1024), 2)) + " GB"

# Convert the List of files and folders to JSON
def ListDirectory(path, docPath = ""):
    files = os.listdir(path)
    jsons = []
    
    for file in files:
        
        json = {
            "IsFile": True,
            "Name": file,
            "Tags": [],
            "Size": ConvertToReadableSize(os.path.getsize(os.path.join(path, file))),
            "Path": docPath,
            "Content": None,
        }
        
        if os.path.isdir(os.path.join(path, file)):
            print("folder")
            json["IsFile"] = False
            json["Content"] = ListDirectory(os.path.join(path, file), os.path.join(docPath, file))
            
        jsons.append(json)
       
    return jsons

# Convert the List of files and folders to JSON
jsonContent = ListDirectory("E:\\Backups\\Important Backup\\School\\University Class Backups")

# Print JSON for Debugging
print(jsonContent)

# Save the JSON to a file
with open("src/assets/ClassBackups.json", "w") as jsonFile:
    json.dump(jsonContent, jsonFile, indent=4)
